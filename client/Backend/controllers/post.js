import { db } from "../connectMysql.js";
import Jwt from "jsonwebtoken";
import moment from "moment";

export const getPost = (req, res) => {
  const userId=req.query.userId;
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  Jwt.verify(token, "secretKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =userId !=="undefined" ?`SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN user AS u ON (u.id=p.userId) WHERE userId=? ORDER BY p.createdAt DESC` :`SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN user AS u ON (u.id=p.userId)
    LEFT JOIN relationship AS r ON(p.userId=r.followedUserId) WHERE  r.followerUserId=? OR p.userId=?
    ORDER BY p.createdAt DESC`;
    const values=userId !=="undefined" ? [userId] : [userInfo.id,userInfo.id];
    db.query(q,values, (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");

  Jwt.verify(token, "secretKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "INSERT INTO posts (`desc`,`img`,`createdAt`,`userId`) VALUES (?)";
    const values=[
      req.body.desc,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH-mm-ss"),
      userInfo.id
    ]
    db.query(q,[values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json("post has been created");
    });
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");

  Jwt.verify(token, "secretKey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM  posts WHERE `id`=? AND `userId`=?";
  
    db.query(q,[req.params.id,userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if(data.affectedRows>0) return res.status(200).json("post has been created");
      return res.status(403).json("you can delete inly your post!")
    });
  });
};
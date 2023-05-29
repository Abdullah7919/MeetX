import express from 'express';
import { getPost,addPost,deletePost }from '../controllers/post.js';
const route=express.Router();

route.get("/",getPost)
route.post("/",addPost);
route.delete("/:id",deletePost);

export default route;
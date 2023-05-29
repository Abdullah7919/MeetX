import express from "express";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";
import likesRoutes from "./routes/likes.js";
import commentsRoutes from "./routes/comments.js";
import relationshipRoutes from './routes/relationship.js';
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload",upload.single("file"), (req,res)=>{
    const file=req.file;
    res.status(200).json(file.filename);
})

app.use("/api/user", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comment", commentsRoutes);
app.use("/api/likes", likesRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/relationship",relationshipRoutes);

app.listen(5000, () => {
  console.log("API Working!");
});

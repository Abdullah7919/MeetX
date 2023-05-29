import express from 'express';
import { getComment ,addComment }from '../controllers/comment.js';
const route=express.Router();

route.get("/",getComment);
route.post("/",addComment);

export default route;
import express from 'express';
import { getLike,addLike,deleteLike }from '../controllers/like.js';

const route=express.Router();

route.get("/",getLike);
route.post("/",addLike);
route.delete("/",deleteLike);

export default route;
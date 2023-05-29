import express from 'express';
import { getRelationship,addRelationship,deleteRelationship }from '../controllers/relationship.js';

const route=express.Router();

route.get("/",getRelationship);
route.post("/",addRelationship);
route.delete("/",deleteRelationship);

export default route;
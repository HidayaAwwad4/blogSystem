import { Router } from "express";
import blogModel from "../../../DB/model/blog.model.js";
import jwt from "jsonwebtoken";
const app = Router({caseSensitive:true});

app.get('/',async(req,res)=>{
    try{
    const blogs = await blogModel.findAll();
    return res.status(200).json({message:"success",blogs:blogs});
}catch(error){
    return res.status(500).json({message:"catch error",error});
}
});





export default app;
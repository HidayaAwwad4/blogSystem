import { Router } from "express";
import blogModel from "../../../DB/model/blog.model.js";
import commentModel from "../../../DB/model/comment.model.js"
const app = Router({caseSensitive:true});

app.get('/',async(req,res)=>{
    try{
    const blogs = await blogModel.findAll();
    return res.status(200).json({message:"success",blogs:blogs});
}catch(error){
    return res.status(500).json({message:"catch error",error});
}
});

app.post('/',async(req,res)=>{
    try{
    const {title,description,category,usertype} = req.body;
    if(usertype != "admin"){
        return res.status(400).json({message:"not authenticated user"});
    }
    await blogModel.create({title,description,category,usertype});
    return res.status(201).json({message:"success"});
    }catch(error){
        return res.status(500).json({message:"catch error",error});
    }
});




export default app;
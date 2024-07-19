import bcrypt from 'bcryptjs';
import { Router } from "express";
import userModel from "../../../DB/model/user.model.js";
import blogModel from "../../../DB/model/blog.model.js";
import jwt from "jsonwebtoken";
const app =Router();

app.post('/register',async(req,res)=>{
    try{
    const {name,email,password} = req.body;
    let passwordhashed = bcrypt.hashSync(password,8);
    await userModel.create({name,email,password:passwordhashed});
    return res.status(201).json({message:"success"});
    }catch(error){
        return res.status(500).json({message:"catch error",error});
    }
});
app.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    const user = await userModel.findOne({
        where:{
            email:email
        }
    });
    if(!user){
        return res.status(404).json({message:"email not found"});
    }
    //فك تشفير الباس وورد (bcrypt)
    const checkPassword =await bcrypt.compare(password,user.password);
    if(!checkPassword){
        return res.status(400).json({message:"invalid password"});
    }
    const token =await jwt.sign({id:user.id , name:user.name},'hidayaPassword')//'hidayaPassword' هاي باسورد لازم نكتبها وما حدا يعرفها غيرنا عشان ولا حدا يقدر يعدل على هاي التوكين
    return res.status(200).json({message:"success",token});
})
export default app;
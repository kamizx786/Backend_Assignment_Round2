import User from "../models/user";
import jwt from "jsonwebtoken";
import {nanoid} from "nanoid";
import {hashpassword ,comparepassword}from "../helpers/auth";
export const  register=async(req,res)=>{
    const {first_name,last_name,email,password,gender,age,country,city}=req.body;
    const exist = await User.findOne({email});
    if (exist) 
    {
        return res.json({
            error:"User Already Exist"
        })
    } 
    if(!password || password.length<6) 
    {
        return res.json({
            error:"Password is Required and Should be atleast 6 characters"
        })
    } 
    const hashedpassword= await hashpassword(password);
    const user=new User({first_name,last_name,email,password:hashedpassword
        ,username:email,gender,age,country,city});
   try
   {
   await user.save();
   return res.json({ok:true})
   }
   catch(err)
   {
       console.log("Register Error",err);
       return res.json({
        error:"Try Again"
    })
   }
   

}
export const login=async (req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email});
        if(!user) { 
            return  res.json({
                error:"User Not Found"
            })
        }
        const match= await comparepassword(password,user.password);
        if(!match)
        {
            return res.json({
                error:"Wrong password"
            })
        }
        const token=jwt.sign({_id:user._id},process.env.JWT_SECRET,{
          expiresIn:'7d'  
        });
        user.password=undefined;
        user.secret=undefined;
      return res.json({
           "token":token,
           "user_id":user._id
        })

    }
    catch(err)
    {
        console.log("Login Error",err);
        return res.json({
            error:"Try Again"
        })
    }
}
export const user=async (req,res)=>{
    try{
        const{_id}=req.params;
        const user=await User.findById(_id);
        if(!user) { 
            return  res.json({
                error:"User Not Found"
            })
        }
        user.password=undefined;
        user.id=user._id;
      return res.json( user)

    }
    catch(err)
    {
        return res.json({
            error:"Try Again"
        })
    }
}
export const  updateuser=async(req,res)=>{
    try
    {
    const {first_name,last_name,email,gender,age,country,city}=req.body;
    const user=await User.findByIdAndUpdate(req.params._id,{first_name,last_name,email
 ,gender,age,country,city},{new:true});
   
   return res.json({ok:true})
   }
   catch(err)
   {
       return res.json({
        error:"Try Again"
    })
   }
   

}
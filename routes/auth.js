import express from "express";
import { register, login ,user,updateuser} from "../controller/auth.js";
const router=express.Router();
router.post("/register",register);
router.post("/login",login);
router.get("/users/:_id",user);
router.patch("/users/:_id",updateuser);


module.exports=router;
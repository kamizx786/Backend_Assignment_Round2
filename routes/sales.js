import express from "express";
const router=express.Router();
import { salesCreate,updatesales,deletesales,Allsales,sales_statistics } from "../controller/sales";
import { requireSigin } from "../middlewares";
router.post("/sales/create",salesCreate);
router.put("/sales/:_id",updatesales);
router.patch("/sales/:_id",updatesales);
router.delete("/sales/:_id",deletesales);
router.get("/sales",Allsales);
router.get("/sale_statistics/",sales_statistics);


module.exports=router;
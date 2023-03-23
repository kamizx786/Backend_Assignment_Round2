import express from "express";
const router=express.Router();
import { createCountries,countries } from "../controller/countries";
router.post("/createCountries",createCountries);
router.get("/countries",countries);

module.exports=router;
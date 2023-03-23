import Country from "../models/countries";
export const  createCountries=async(req,res)=>{
    const {name,cities}=req.body;
    const countries=await Country.findOne({name});
    if(countries){
        return res.json({
            error:"Countries already  Exist",
        })
    }
    const country=new Country({name,cities});
   try
   {
   await country.save();
   return res.json(country);
   }
   catch(err)
   {
       console.log("Countries  Error",err);
       return res.json({
        error:"Try Again"
    })
   }
}
export const  countries=async(req,res)=>{
     try
   {
   const countries=await Country.find();
   return res.json(countries);
   }
   catch(err)
   {
       return res.json({
        error:"Try Again"
    })
   }
   

}
import mongoose from "mongoose";
const {Schema}=mongoose;
const CountrySchema =new Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    },
   cities:[
    {
        name:"",
    }
   ]

},{timestamps:true});
export default mongoose.model("Country",CountrySchema);


import mongoose from "mongoose";
const {Schema}=mongoose;
const USerSchema =new Schema({
    first_name:{
        type:String,
        trim:true,
        required:true,
    },
    last_name:{
        type:String,
        trim:true,
        required:true,
    },
    gender:{
        type:String
    },
    age:{
        type:Number
    },
    country:{
        type:Schema.Types.ObjectId,
        ref:"Country"
    },
    city:{
        type:Schema.Types.ObjectId,
        ref:"Country.cities"
    },
    username:{
      type:String,
      required:true,
      unique:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:65,
    },

},{timestamps:true});
export default mongoose.model("User",USerSchema);


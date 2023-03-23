import mongoose from "mongoose";
const {Schema}=mongoose;
const SalesSchema =new Schema({
product:{
        type:String,
        trim:true,
        required:true,
    },
    sales_number:{
        type:Number
    },
   revenue:{
        type:Number
    },
    user_id:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    date:{
        type:Date,
        default:Date.now,
    }
    
},{timestamps:true});
export default mongoose.model("Sales",SalesSchema);


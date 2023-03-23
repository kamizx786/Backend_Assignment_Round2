import Sales from "../models/sales";
export const  salesCreate=async(req,res)=>{
    const {product,revenue,sales_number,user_id}=req.body;
    
    const sales=new Sales({product,revenue,sales_number,user_id});
   try
   {
   await sales.save();
   return res.json(sales);
   }
   catch(err)
   {
       return res.json({
        error:"Try Again"
    })
   }
}
export const  updatesales=async(req,res)=>{
    try
    {
    const {product,revenue,sales_number,user_id}=req.body;
    const sales=await Sales.findByIdAndUpdate(req.params._id,{product,revenue,sales_number,user_id},{new:true});
   
   return res.json(sales)
   }
   catch(err)
   {
       return res.json({
        error:"Try Again"
    })
   }
   

}
export const  deletesales=async(req,res)=>{
    try
    {
    const sales=await Sales.findById(req.params._id);
   sales.delete();
   return res.json({ok:true})
   }
   catch(err)
   {
       return res.json({
        error:"Try Again"
    })
   }
   

}
export const  Allsales=async(req,res)=>{
    try
    {
    const sales=await Sales.find();
   return res.json(sales)
   }
   catch(err)
   {
       return res.json({
        error:"Try Again"
    })
   }
   

}

export const sales_statistics=async(req,res)=>{
    try
    {
        const userSales = await Sales.find({user_id: "641cb41a29726abe3b705cab"});
        const totalRevenue = userSales.reduce((acc, curr) => acc + curr.revenue, 0);
        const avgSales = totalRevenue / userSales.length;
        const AllSales = await Sales.find();
        const AlltotalRevenue = AllSales.reduce((acc, curr) => acc + curr.revenue, 0);
        const AllavgSales = AlltotalRevenue / AllSales.length;
        const HighestRevenue= await Sales.find({user_id: "641cb41a29726abe3b705cab"}).sort({revenue:-1}).limit(1);
const SalesNumber= await Sales.find({user_id: "641cb41a29726abe3b705cab"}).sort({sales_number:-1}).limit(1);
return res.json({
    "average_sales_for_current_user": avgSales,
    "average_sale_all_user": AllavgSales,
    "highest_revenue_sale_for_current_user": {
    "sale_id": HighestRevenue[0]._id,
    "revenue": HighestRevenue[0].revenue
    },
    "product_highest_revenue_for_current_user": {
    "product_name": HighestRevenue[0].product,
    "price": HighestRevenue[0].revenue
    },
    "product_highest_sales_number_for_current_user": {
    "product_name": SalesNumber[0].product,
    "sales_number": SalesNumber[0].sales_number
    }
    })
    }
   catch(err)
   {
       return res.json({
        error:"Try Again"
    })
   }
   

}
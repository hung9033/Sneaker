import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
   
    name: String,
    img: String,
    price:Number,
    category: String,
    description: String,
},
   { 
    timestamps:true
   }
)
const ProductModel = mongoose.model('products', ProductSchema);
export default ProductModel;
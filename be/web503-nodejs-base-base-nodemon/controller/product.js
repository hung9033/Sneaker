import ProductModel from "../model/product.js"
import { validate } from "../validation/product.js";

export const getAllProducts = async (req, res) => {
    try {
        const { search } = req.query;
        let products;

        if (search) {
            products = await ProductModel.find({ name: { $regex: search, $options: 'i' } });
        } else {
            products = await ProductModel.find();
        }
        return res.status(200).json(products);
    } catch (error) {
        res.status(403).json({ status: false, message: "Lỗi" });
    }
};
export const getProductsById = async (req,res) => {
    try {
        const id = req.params.id;
        const products = await ProductModel.find({_id:id});
        return res.status(200).json(products)
    } catch (error) {
        res.status(403).json({ status:false, message:"Lỗi"})
    }
}
export const addProducts = async (req,res) => {
    try {
        const { error } = validate.validate(req.body,{ abortEarly: true })
        if(error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
              message: errors,
            });
        }else{
            const body = req.body;
            const productmodel = new ProductModel(body)
            const product = await productmodel.save(); 
            return res.status(200).json({ status:true, data:product,message:"Them thanh cong"})
        }
       
    } catch (error) {
        res.status(403).json({ status:false, message:"Lỗi"})
    }
}
export const updateProducts = async (req,res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const product = await ProductModel.findOneAndUpdate({_id:id}, body ,{new:true})
        return res.status(200).json({ status:true, data:product, message:"Caapj nhaat thanh cong"})
    } catch (error) {
        res.status(403).json({ status:false, message:"Lỗi"})
    }
}
export const delProducts = async (req,res) => {
    try {
        const id = req.params.id;
        const product = await ProductModel.findOneAndDelete({_id:id})
        return res.status(200).json({ status:true, data:product, message:" Xoas thanh cong"})
    } catch (error) {
        res.status(403).json({ status:false, message:"Lỗi"})
    }
}
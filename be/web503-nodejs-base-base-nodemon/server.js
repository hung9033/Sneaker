import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // Import cors
import ProductRouter from "./router/product.js";
import AuthRouter from "./router/auth.js";
import CartRouter from "./router/cart.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cấu hình CORS
app.use(cors());

app.use('/', ProductRouter);
app.use('/auth', AuthRouter);
app.use('/', CartRouter);
const db = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/productshop");
    console.log("Kết nối thành công");
  } catch (error) {
    console.log(error);
  }
}

app.listen(4000, () => {
  db();
  console.log(`Server on port 4000`);
});

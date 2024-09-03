import express from 'express';
import { addProducts, delProducts, getAllProducts, getProductsById, updateProducts } from '../controller/product.js';

const router = express.Router();
router.get('/products', getAllProducts);
router.get('/products/:id', getProductsById);
router.post('/products', addProducts);
router.put('/products/:id', updateProducts);
router.delete('/products/:id', delProducts);
export default router;


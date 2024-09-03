import express from 'express';
import { Cart } from '../controller/cart.js';
const router = express.Router();
router.post('/cart', Cart);

export default router;
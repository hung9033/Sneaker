import express from 'express';
import { getAllUser, Login, Register } from '../controller/auth.js';
const router = express.Router();
router.post('/login', Login);
router.post('/register', Register);
router.get('/users', getAllUser
);
export default router;
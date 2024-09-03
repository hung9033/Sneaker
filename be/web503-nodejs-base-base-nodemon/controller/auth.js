import AuthtModel from "../model/auth.js";
import bcrypt from "bcrypt";
import { validateAuth } from "../validation/auth.js";
import jwt from 'jsonwebtoken';

export const Register = async (req, res) => {
    try {
        const { error } = validateAuth.validate(req.body)
        if (error) {
            res.status(400).json({ status: false, message: error.message + "Failed" })
        } else {
            const body = req.body;
            body.password = await bcrypt.hash(body.password, 10);
            const authmodel = AuthtModel(body);
            const register = await authmodel.save();
            res.status(200).json({ status: true, message: "Register ok!", data: register });
        }
    } catch (error) {
        res.status(500).json({ status: false, message: error.message })
    }
}

export const Login = async (req, res) => {
    const body = req.body;

    try {
        const user = await AuthtModel.findOne({ email: body.email });
        if (!user) {
            return res.send({ status: false, message: "Account could not be seek!" });
        }

        const verify = await bcrypt.compare(body.password, user.password);
        if (verify) {
            const token = jwt.sign({ id: user._id }, '123456', { expiresIn: '1h' }); // Đặt thời gian hết hạn token nếu cần
            return res.send({ status: true, message: "Login successfully!", accessToken: token });

        } else {
            return res.send({ status: false, message: "Wrong account or password!" });
        }
    } catch (error) {
        console.error("Login error: ", error);
        return res.status(500).send({ status: false, message: "An error occurred during login!" });
    }


}

export const getAllUser = async (req, res) => {
    try {
        const { search } = req.query;
        let users;

        if (search) {
            users = await AuthtModel.find({ name: { $regex: search, $options: 'i' } });
        } else {
            users = await AuthtModel.find();
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(403).json({ status: false, message: "Lỗi" });
    }
};
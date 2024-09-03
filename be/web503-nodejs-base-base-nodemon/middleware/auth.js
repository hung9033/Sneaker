import jwt from "jsonwebtoken";
import User from "../models/UserModel";

const checkPermission = async (req, res, next) => {
  try {
    // Lấy token từ header Authorization
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "No Authorization Token Provided",
      });
    }

    // Xác thực token
    const data = jwt.verify(token, process.env.SECRET_KEY);
    if (!data) {
      return res.status(401).json({
        message: "Invalid Token",
      });
    }

    // Kiểm tra người dùng
    const user = await User.findById(data.id);
    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    // Kiểm tra quyền của người dùng
    if (user.role !== 'admin') {
      return res.status(403).json({
        message: 'You do not have permission to perform this action',
      });
    }

    // Đính kèm thông tin người dùng vào request (tùy chọn)
    req.user = user;
    
    next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export { checkPermission };

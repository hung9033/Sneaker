import mongoose from "mongoose";

const AuthSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
    },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
    
},{
    timestamps:true,
})
const AuthtModel = mongoose.model('users', AuthSchema);
export default AuthtModel;
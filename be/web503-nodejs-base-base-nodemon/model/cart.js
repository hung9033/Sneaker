import mongoose from "mongoose";

const orderSchema =  mongoose.Schema({
    products: [
        {
            id: String,
            name: String,
            price: Number,
            quantity: Number,
        }
    ],
    personalDetails: {
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        address: String,
        city: String,
        state: String,
        zipCode: String,
    },
    totalAmount: Number,
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
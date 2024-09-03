import Order from "../model/cart.js";

// const Order = require('../models/cart.js');
export const Cart = async (req, res) => {
    const { products, personalDetails, totalAmount } = req.body;

  
    try {
        const newOrder = new Order({
            products,
            personalDetails,
            totalAmount
        });

        await newOrder.save();

        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(500).json({ message: 'Failed to place order' });
    }
};



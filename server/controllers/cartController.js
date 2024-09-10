// controllers/cartController.js
const Cart = require('../models/Cart');
const Item = require('../models/Item');



module.exports = {
    async getCart(req, res) {
        try {
            const cart = await Cart.findOne({ user: req.user._id }).populate('items.item');
            if (!cart) {
                return res.status(404).json({ message: 'Cart not found' });
            }
            res.json(cart);
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    },


    async addItemToCart(req, res) {
        const { itemId, quantity } = req.body;

        try {
            const item = await Item.findById(itemId);
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }

            let cart = await Cart.findOne({ user: req.user._id });

            if (!cart) {
                // If the user doesn't have a cart yet, create a new one
                cart = new Cart({ user: req.user._id, items: [] });
            }

            const existingItemIndex = cart.items.findIndex(
                (item) => item.product.toString() === itemId
            );

            if (existingItemIndex >= 0) {
                // If product already exists in cart, update quantity
                cart.items[existingItemIndex].quantity += quantity;
            } else {
                // Otherwise, add new product to cart
                cart.items.push({ item: itemId, quantity });
            }

            await cart.save();
            res.json(cart);
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    },


    async removeItemFromCart(req, res) {
        const { itemId } = req.body;

        try {
            let cart = await Cart.findOne({ user: req.user._id });
            if (!cart) {
                return res.status(404).json({ message: 'Cart not found' });
            }

            cart.items = cart.items.filter((item) => item.item.toString() !== itemId);
            await cart.save();
            res.json(cart);
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    },



    
    async updateItemQuantity(req, res) {
        const { itemId, quantity } = req.body;

        try {
            let cart = await Cart.findOne({ user: req.user._id });
            if (!cart) {
                return res.status(404).json({ message: 'Cart not found' });
            }

            const existingItemIndex = cart.items.findIndex(
                (item) => item.item.toString() === itemId
            );

            if (existingItemIndex >= 0) {
                cart.items[existingItemIndex].quantity = quantity;
                await cart.save();
                res.json(cart);
            } else {
                res.status(404).json({ message: 'Item not found in cart' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Server error' });
        }
    },


};
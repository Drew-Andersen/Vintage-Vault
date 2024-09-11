const Item = require('../models/Item');

module.exports = {
  async getAllItems(req, res,) {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getItem(req, res) {
    try {
      const item = await Item.findOne({ _id: req.params.itemId })
        .select('-__v');

      if (!item) {
        return res.status(404).json({ message: 'No item with that ID' });
      }

      res.json(item);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new item
  async createItem(req, res) {
    try {
      const dbItemData = await Item.create(req.body);
      res.json(dbItemData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
 
  //update Item
  async updateItem(req, res) {
    try {
        const item = await Item.findOneAndUpdate(
            {_id: req.params.itemId },
            { $set: req.body },
            { runValidators: true, new: true }
        );

        if (!item) {
          return res.status(404).json({ message: 'No item with this id!'});
        }

        res.json(item);
       } catch (err) {
         console.log(err);
         res.status(500).json(err);
       }
   },

   //remove item
   async removeItem(req, res) {
    try {
      const item = await Item.findOneAndRemove({ _id: req.params.itemId });

      if (!item) {
        return res.status(404).json({ message: 'No item with this id!' });
      }

      if (!item) {
        return res
          .status(404)
          .json({ message: 'Item created but no user with this id!' });
      }

      res.json({ message: 'Item successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  }, 

  async postItem(req, res) {
    try {
      const { name, description, price, imageURL, category, sellerId } = req.body;

    // Find the seller by their ID (assuming sellerId is passed in the request body)
      const seller = await User.findById(sellerId);
    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    // Create the new item
    const newItem = await Item.create({
      name,
      description,
      price,
      imageURL,
      category,
      seller: seller._id
    });

    // Send a response with the created item
    res.status(201).json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, could not post the item' });
  }
};
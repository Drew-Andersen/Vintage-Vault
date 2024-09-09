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


};
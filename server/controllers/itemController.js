const Item = require('../models/Item');

module.exports = {
  async getAllItems(req, res,) {
    console.log('Hello');
    try {
      const items = await Item.find();
      console.log(items);
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
};
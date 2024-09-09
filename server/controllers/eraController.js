const Era = require('../models/Era');

module.exports = {
  async getAllEras(req, res,) {
    try {
      const eras = await Era.find();
      res.json(eras);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getEra(req, res) {
    try {
      const era = await Era.findOne({ _id: req.params.eraId })
        .select('-__v');

      if (!era) {
        return res.status(404).json({ message: 'No era with that ID' });
      }

      res.json(era);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new era
  async createEra(req, res) {
    try {
      const dbEraData = await Era.create(req.body);
      res.json(dbEraData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

 //update Era
 async updateEra(req, res) {
    try {
        const era = await Era.findOneAndUpdate(
            {_id: req.params.eraId },
            { $set: req.body },
            { runValidators: true, new: true }
        );

        if (!era) {
          return res.status(404).json({ message: 'No era with this id!'});
        }

        res.json(era);
       } catch (err) {
         console.log(err);
         res.status(500).json(err);
       }
   },
 
 
 
  //remove era
  async removeEra(req, res) {
    try {
      const era = await Era.findOneAndRemove({ _id: req.params.eraId });

      if (!era) {
        return res.status(404).json({ message: 'No era with this id!' });
      }

      if (!era) {
        return res
          .status(404)
          .json({ message: 'Era created but no era with this id!' });
      }

      res.json({ message: 'Era successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  }, 

};
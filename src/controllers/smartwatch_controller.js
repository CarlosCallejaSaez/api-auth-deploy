const Smartwatch = require('../models/smartwatch_model');


const getAllSmartwatches = async (req, res, next) => {
  try {
    const smartwatches = await Smartwatch.find().populate('manufacturer');
    return res.status(200).json({data: smartwatches});
  } catch (error) {
    return res.status(400).json({ data: `Error getting all the smartwatches : ${error}` });
  }
  
};

const getSmartwatchById = async (req, res, next) => {
  try {
    id = req.params.id
    const smartwatch = await Smartwatch.findById(id).populate('manufacturer');
    return res.status(200).json({data: smartwatch});
  } catch (error) {
    return res.status(400).json({ data: `Smartwatch with id ${id} not found, error : ${error}` });
  }
  };

  const createSmartwatch = async (req, res, next) => {
    try {
      const newSmartwatch = new Smartwatch(req.body);
      const createdSmartwatch = await newSmartwatch.save();
      return res.status(201).json({data : createdSmartwatch});
    } catch (error) {
      return res.status(400).json({ data: `Error creating new Smartwatch : ${error}` });
    }
  };


  const updateSmartwatchById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedSmartwatch = await Smartwatch.findByIdAndUpdate(id, req.body, {
        new: true
      });
      return res.status(200).json({data : updatedSmartwatch});
    } catch (error) {
      return res.status(400).json({ data: `Error updating Smartwatch : ${error} ` });
    }
  };

  const deleteSmartwatch = async (req, res, next) => {
    try {
      const { id } = req.params;
      await Smartwatch.findByIdAndDelete(id);
      return res.status(200).json({data: `Smartwatch with id : ${id} deleted`});
    } catch (error) {
      return res.status(400).json({ data: `Error deleting Smartwatch  with id : ${id} : ${error}` });
    }
  };

  module.exports = {
    getAllSmartwatches,
    getSmartwatchById,
    createSmartwatch,
    updateSmartwatchById,
    deleteSmartwatch
  };
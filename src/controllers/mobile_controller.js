const Mobile = require('../models/mobile_model');


const getAllMobiles = async (req, res, next) => {
  try {
    const mobiles = await Mobile.find().populate('manufacturer');
    return res.status(200).json({data: mobiles});
  } catch (error) {
    return res.status(400).json({ data: `Error getting all the mobiles : ${error}` });
  }
  
};

const getMobileById = async (req, res, next) => {
  try {
    id = req.params.id
    const mobile = await Mobile.findById(id).populate('manufacturer');
    return res.status(200).json({data: mobile});
  } catch (error) {
    return res.status(400).json({ data: `Mobile with id ${id} not found, error : ${error}` });
  }
  };

  const createMobile = async (req, res, next) => {
    try {
      const newMobile = new Mobile(req.body);
      const createdMobile = await newMobile.save();
      return res.status(201).json({data : createdMobile});
    } catch (error) {
      return res.status(400).json({ data: `Error creating new Mobile : ${error}` });
    }
  };


  const updateMobileById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedMobile = await Mobile.findByIdAndUpdate(id, req.body, {
        new: true
      });
      return res.status(200).json({data : updatedMobile});
    } catch (error) {
      return res.status(400).json({ data: `Error updating mobile : ${error} ` });
    }
  };

  const deleteMobile = async (req, res, next) => {
    try {
      const { id } = req.params;
      await Mobile.findByIdAndDelete(id);
      return res.status(200).json({data: `Mobile with id : ${id} deleted`});
    } catch (error) {
      return res.status(400).json({ data: `Error deleting mobile  with id : ${id} : ${error}` });
    }
  };

  module.exports = {
    getAllMobiles,
    getMobileById,
    createMobile,
    updateMobileById,
    deleteMobile
  };
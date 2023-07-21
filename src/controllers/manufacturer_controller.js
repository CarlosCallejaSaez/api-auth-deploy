const Manufacturer = require("../models/manufacturer_model");

const getAllManufacturers = async (req, res, next) => {
  try {
    const manufacturers = await Manufacturer.find();
    return res.status(200).json({ data: manufacturers });
  } catch (error) {
    return res
      .status(400)
      .json({ data: `Error finding manufacturers : ${error}` });
  }
};

const getManufacturerById = async (req, res, next) => {
  try {
    const manufacturer = await Manufacturer.findById(req.params.id);
    res.status(200).json({ data: manufacturer });
  } catch (error) {
    return res
      .status(400)
      .json({ data: `Manufacturer with id ${id} not found` });
  }
};

const createManufacturer = async (req, res, next) => {
  try {
    const newManufacturer = new Manufacturer(req.body);
    const createdManufacturer = await newManufacturer.save();
    return res.status(201).json({ data: createdManufacturer });
  } catch (error) {
    return res
      .status(400)
      .json({ data: `Error creating manufacturer ${error}` });
  }
};

const updateManufacturerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newManufacturer = await Manufacturer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(newManufacturer);
  } catch (error) {
    return res
      .status(400)
      .json({ data: `Error updating manufacturer with id ${id} : ${error}` });
  }
};

const deleteManufacturer = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Manufacturer.findByIdAndDelete(id);
    return res.status(200).json({ data: `Manufacturer with id ${id} deleted` });
  } catch (error) {
    return res
      .status(400)
      .json({ data: `Error deleting manufacturer with id ${id} : ${error} ` });
  }
};

module.exports = {
  getAllManufacturers,
  getManufacturerById,
  createManufacturer,
  updateManufacturerById,
  deleteManufacturer,
};

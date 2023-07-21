const express = require("express");
const {
  getAllManufacturers,
  getManufacturerById,
  createManufacturer,
  updateManufacturerById,
  deleteManufacturer,
} = require("../controllers/manufacturer_controller.js");

const { isAuth } = require('../middlewares/auth.js');

const router = express.Router();

router.get("/", getAllManufacturers);
router.get("/:id", getManufacturerById);
router.post("/",[isAuth], createManufacturer);
router.put("/:id",[isAuth], updateManufacturerById);
router.delete("/:id",[isAuth], deleteManufacturer);

module.exports = router;

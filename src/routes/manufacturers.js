const express = require("express");
const {
  getAllManufacturers,
  getManufacturerById,
  createManufacturer,
  updateManufacturerById,
  deleteManufacturer,
} = require("../controllers/manufacturer_controller.js");

const router = express.Router();

router.get("/", getAllManufacturers);
router.get("/:id", getManufacturerById);
router.post("/", createManufacturer);
router.put("/:id", updateManufacturerById);
router.delete("/:id", deleteManufacturer);

module.exports = router;

const express = require("express");
const {
  getAllSmartwatches,
  getSmartwatchById,
  createSmartwatch,
  updateSmartwatchById,
  deleteSmartwatch,
} = require("../controllers/smartwatch_controller.js");

const router = express.Router();

router.get("/", getAllSmartwatches);
router.get("/:id", getSmartwatchById);
router.post("/", createSmartwatch);
router.put("/:id", updateSmartwatchById);
router.delete("/:id", deleteSmartwatch);

module.exports = router;

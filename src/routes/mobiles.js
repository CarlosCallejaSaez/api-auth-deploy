const express = require("express");
const {
  getAllMobiles,
  getMobileById,
  createMobile,
  updateMobileById,
  deleteMobile,
} = require("../controllers/mobile_controller.js");
const router = express.Router();

router.get("/", getAllMobiles);
router.get("/:id", getMobileById);
router.post("/", createMobile);
router.put("/:id", updateMobileById);
router.delete("/:id", deleteMobile);

module.exports = router;

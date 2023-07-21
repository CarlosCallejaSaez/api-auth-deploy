const express = require("express");
const {
  getAllMobiles,
  getMobileById,
  createMobile,
  updateMobileById,
  deleteMobile,
} = require("../controllers/mobile_controller.js");

const { isAuth } = require('../middlewares/auth.js');

const router = express.Router();

router.get("/", getAllMobiles);
router.get("/:id", getMobileById);
router.post("/", [isAuth], createMobile);
router.put("/:id", [isAuth], updateMobileById);
router.delete("/:id", [isAuth], deleteMobile);

module.exports = router;

const express = require("express");
const {
  getAllSmartwatches,
  getSmartwatchById,
  createSmartwatch,
  updateSmartwatchById,
  deleteSmartwatch,
} = require("../controllers/smartwatch_controller.js");

const { isAuth } = require('../middlewares/auth.js');

const router = express.Router();

router.get("/", getAllSmartwatches);
router.get("/:id", getSmartwatchById);
router.post("/",[isAuth], createSmartwatch);
router.put("/:id", [isAuth], updateSmartwatchById);
router.delete("/:id",[isAuth], deleteSmartwatch);

module.exports = router;

const mongoose = require("mongoose");


const SmartwatchSchema = new mongoose.Schema(
    {
      name: { type: String, required: true, trim: true },
      gps: { type: Boolean, required: true, trim: true },
      price: { type: Number, required: true, trim: true },
      stock: { type: Number, required: true, trim: true },
      manufacturer: [
        {
          type: mongoose.Types.ObjectId,
          required: true,
          trim: true,
          ref: "Manufacturer",
        },
      ],
    },
    {
      timestamps: true,
    }
  );

const Smartwatch = mongoose.model("Smartwatch", SmartwatchSchema);
module.exports = Smartwatch;
const mongoose = require("mongoose");

const ManufacturerSchema =  mongoose.Schema(
    {
      name: { type: String, required: true, trim: true },
      telephone: { type: Number, required: false, trim: true },
      mail: { type: String, required: false, trim: true },
    },
    {
      timestamps: true,
    }
  );

  const Manufacturer = mongoose.model("Manufacturer", ManufacturerSchema);
  module.exports = Manufacturer;
const mongoose = require("mongoose");


const MobileSchema = new mongoose.Schema(
    {
      name: { type: String, required: true, trim: true },
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

const Mobile = mongoose.model("Mobile", MobileSchema);
module.exports = Mobile;
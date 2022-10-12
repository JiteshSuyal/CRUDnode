const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    name: { type: String },
    addressText: { type: String },
  },
  { timestamps: true }
);

const address = mongoose.model("Address", addressSchema);
module.exports = address;

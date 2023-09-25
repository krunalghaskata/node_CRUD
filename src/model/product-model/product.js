const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String },
  price: { type: Number, min: [0, "wrong price"], required: true },
  discountPercentage: {
    type: Number,
    min: [0, "wrong min discount"],
    max: [50, "wrong max discount"],
  },
  rating: {
    type: Number,
    min: [0, "wrong min rating"],
    max: [5, "wrong max rating"],
  },
  stock: { type: Number, required: true },
  brand: { type: String, require: true },
  category: { type: String, require: true },
  thumbnail: { type: String, require: true },
  images: [String],
});

exports.productSchemas = mongoose.model("product", productSchema);

const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  productName: {
    type: String,
    trim: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  subCategory: {
    type: String,
  },
  price: {
    type: Number,
    min: 1,
  },
  productPicture: {
    type: String,
  },
  color: {
    type: String,
  },
});

const Product = model("product", productSchema);
module.exports = Product;

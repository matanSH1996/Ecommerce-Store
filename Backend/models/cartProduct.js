const { Schema, model } = require("mongoose");

const MIN_QUANTITY = 0;

const cartProductSchema = new Schema({
  cartKey: {
    type: Schema.Types.ObjectId,
    ref: "Cart",
  },
  productKey: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    min: [1, `number of products must be bigger than ${MIN_QUANTITY}, got {VALUE}`],
    default: 1,
  },
  totalPrice: {
    type: Number,
  },
});

const CartProduct = model("cartProduct", cartProductSchema);
module.exports = CartProduct;

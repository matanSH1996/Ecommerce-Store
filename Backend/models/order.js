const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  cartID: {
    type: Schema.Types.ObjectId,
    ref: "Cart",
  },
  totalPrice: {
    type: Number,
  },
  deliveryAddress: {
    city: {
      type: String,
    },
    street: {
      type: String,
    },
  },
  orderDate: {
    type: Date,
    deffault: Date.now,
  },
  expectedDeliveryDate: {
    $dateAdd: {
      startDate: Date.now,
      unit: "day",
      amount: 21,
    },
  },
  payment: {
    type: String,
  },
});

const Order = model("order", orderSchema);
module.exports = Order;

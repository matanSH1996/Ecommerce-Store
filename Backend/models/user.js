const { Schema, model } = require("mongoose");

const validateEmail = function (email) {
  var mustHaveCharts = /@./;
  return mustHaveCharts.test(email);
};

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  city: {
    type: String,
  },
  street: {
    type: String,
  },
  userName: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  cart: {
    type: Array,
    default: [],
  },
  isAdmin: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = model("user", userSchema);
module.exports = User;

const routeFactory = require("../utils/routesFactory")
const Cart = require("../models/shoppingCart")

exports.createCart = routeFactory.createOne(Cart)
exports.getAllCart = routeFactory.getAll(Cart)
exports.getOneCart = routeFactory.getOne(Cart)
exports.updateCart = routeFactory.updateOne(Cart)
exports.deleteCart = routeFactory.deleteOne(Cart)
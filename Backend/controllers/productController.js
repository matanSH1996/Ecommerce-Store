const routeFactory = require("../utils/routesFactory")
const Product = require("../models/product")

exports.createProduct = routeFactory.createOne(Product)
exports.getAllProduct = routeFactory.getAll(Product)
exports.getOneProduct = routeFactory.getOne(Product)
exports.updateProduct = routeFactory.updateOne(Product)
exports.deleteProduct = routeFactory.deleteOne(Product)

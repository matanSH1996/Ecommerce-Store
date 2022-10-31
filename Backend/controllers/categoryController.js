const routeFactory = require("../utils/routesFactory")
const Category = require("../models/category")

exports.createCategory = routeFactory.createOne(Category)
exports.getOneCategory = routeFactory.getCategory(Category)
exports.getAllCategory = routeFactory.getAll(Category)
exports.updateCategory = routeFactory.updateOne(Category)
exports.deleteCategory = routeFactory.deleteOne(Category)

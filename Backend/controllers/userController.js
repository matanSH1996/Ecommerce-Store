const routeFactory = require("../utils/routesFactory")
const User = require("../models/user")

exports.createUser = routeFactory.createOne(User)
exports.getAllUsers = routeFactory.getAll(User)
exports.getOneUser = routeFactory.getOne(User)
exports.updateUser = routeFactory.updateOne(User)
exports.deleteUser = routeFactory.deleteOne(User)
const router = require("express").Router()
const cartController = require("../controllers/cartController")

router
    .route('/')
        .get(cartController.getAllCart)
        .post(cartController.createCart)
        .put()
        .delete()

router
    .route('/:id')
        .get(cartController.getOneCart)
        .post()
        .put(cartController.updateCart)
        .delete(cartController.deleteCart)

module.exports = router
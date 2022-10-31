const router = require("express").Router()
const productController = require("../controllers/productController")

router
    .route('/')
        .get(productController.getAllProduct)
        .post(productController.createProduct)
        .put()
        .delete()

router
    .route('/:id')
        .get(productController.getOneProduct)
        .post()
        .put(productController.updateProduct)
        .delete(productController.deleteProduct)

module.exports = router
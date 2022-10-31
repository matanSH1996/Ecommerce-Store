const router = require("express").Router()
const categoryController = require("../controllers/categoryController")

router
    .route('/')
        .get(categoryController.getAllCategory)
        .post(categoryController.createCategory)
        .put()
        .delete()

router
    .route('/:id')
        .get(categoryController.getOneCategory)
        .post()
        .put(categoryController.updateCategory)
        .delete(categoryController.deleteCategory)

module.exports = router


const MainRouter = require('express').Router()
const MainController = require('../controllers')

MainRouter.get('/:id', MainController.getProductBySellerId)
MainRouter.post('/', MainController.addProduct)
MainRouter.get('/:key_word', MainController.findProduct)

module.exports = MainRouter
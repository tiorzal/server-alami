const MainRouter = require('express').Router()
const MainController = require('../controllers')

MainRouter.get('/', MainController.getProductBySellerId)
MainRouter.post('/', MainController.addProduct)
MainRouter.get('/search', MainController.findProduct)

module.exports = MainRouter
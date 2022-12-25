const express = require('express')
const router = express.Router()
const verifyToken = require('./middleware/auth')

const productLineController = require('./controller/admin/productline')
router.get('/productline', productLineController.getProductLines)
router.post('/productline', productLineController.createProductLine)
router.put('/productline', productLineController.editProductLine)
router.delete('/productline', productLineController.deleteProductLine)

const accountController = require('./controller/admin/account')
router.get('/admin/account', accountController.getAccounts)
router.post('/admin/account/create', accountController.createAccount)
router.delete('/admin/account/:id', accountController.deleteAccount)


const authController = require('./controller/auth')
router.post('/auth/login', authController.login)
router.post('/auth/register', authController.register)
router.get('/auth', verifyToken, authController.checkUser)

module.exports = router
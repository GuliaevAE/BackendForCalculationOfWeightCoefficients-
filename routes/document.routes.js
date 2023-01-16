const Router = require('express');
const documentController = require('../controllers/document.controller');
const router = new Router()

router.get('/document', documentController.getDocument)



module.exports = router
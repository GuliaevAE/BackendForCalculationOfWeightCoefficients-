const Router = require('express');
const clientspartsController = require('../controllers/clientsparts.controller');
const router = new Router()


router.post('/newcp', clientspartsController.addClientsPart)
router.post('/allcp', clientspartsController.getAllClientParts)


module.exports = router
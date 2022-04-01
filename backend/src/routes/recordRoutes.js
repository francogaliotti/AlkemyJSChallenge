const express = require('express');
const routes = express.Router();
const recordController = require('../controllers/recordController')

routes.get('/', recordController.getAllRecords)
routes.post('/', recordController.createRecord)
routes.delete('/:id', recordController.deleteRecord)
routes.put('/:id', recordController.updateRecord)
module.exports = routes;
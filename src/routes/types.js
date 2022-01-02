const express = require('express');
const multer = require('multer');
const path = require('path');
const appRoot = require('app-root-path');
const router = express.Router();


const typeController = require('../app/controllers/backend/TypesController');

router.get('/create',typeController.create);
router.post('/store',typeController.store);
router.get('/edit/:id',typeController.edit);
router.put('/update/:id',typeController.update);
router.delete('/delete/:id',typeController.delete);
router.delete('/delete/force/:id',typeController.destroy);
router.patch('/restore/:id',typeController.restore);
router.get('/trash',typeController.trash);
router.get('/list',typeController.index);
// router.get('/:slug',productController.show);


module.exports = router;
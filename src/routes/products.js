const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/backend/ProductsController');

router.get('/create',productController.create);
router.post('/store',productController.store);
router.get('/edit/:id',productController.edit);
router.put('/update/:id',productController.update);
router.delete('/delete/:id',productController.delete);
router.delete('/delete/force/:id',productController.destroy);
router.patch('/restore/:id',productController.restore);
router.get('/trash',productController.trash);
router.get('/list',productController.index);
// router.get('/:slug',productController.show);


module.exports = router;
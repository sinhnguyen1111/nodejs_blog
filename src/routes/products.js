const express = require('express');
const multer = require('multer');
const path = require('path');
const appRoot = require('app-root-path');
const router = express.Router();

const productController = require('../app/controllers/backend/ProductsController');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,appRoot + "/src/public/backend/uploads/");
    },
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
});

let upload = multer({storage: storage});

router.get('/create',productController.create);
router.post('/store',upload.array('images',10),productController.store);
router.get('/edit/:id',productController.edit);
router.put('/update/:id',upload.array('images',10),productController.update);
router.delete('/delete/:id',productController.delete);
router.delete('/delete/force/:id',productController.destroy);
router.patch('/restore/:id',productController.restore);
router.get('/trash',productController.trash);
router.get('/list',productController.index);
// router.get('/:slug',productController.show);


module.exports = router;
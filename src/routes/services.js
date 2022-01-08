const express = require('express');
const multer = require('multer');
const path = require('path');
const appRoot = require('app-root-path');
const router = express.Router();

const serviceController = require('../app/controllers/backend/ServicesController');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,appRoot + "/src/public/backend/uploads/");
    },
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
});

let upload = multer({storage: storage});

router.get('/create',serviceController.create);
router.post('/store',upload.array('images',10),serviceController.store);
router.get('/edit/:id',serviceController.edit);
router.put('/update/:id',upload.array('images',10),serviceController.update);
router.delete('/delete/:id',serviceController.delete);
router.delete('/delete/force/:id',serviceController.destroy);
router.patch('/restore/:id',serviceController.restore);
router.get('/trash',serviceController.trash);
router.get('/list',serviceController.index);
// router.get('/:slug',productController.show);


module.exports = router;
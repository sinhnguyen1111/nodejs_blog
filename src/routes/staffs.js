const express = require('express');
const multer = require('multer');
const path = require('path');
const appRoot = require('app-root-path');
const router = express.Router();


const staffController = require('../app/controllers/backend/StaffsController');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,appRoot + "/src/public/backend/uploads/");
    },
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
});

let upload = multer({storage: storage});

router.get('/create',staffController.create);
router.post('/store',upload.single('avatar'),staffController.store);
router.get('/edit/:id',staffController.edit);
router.put('/update/:id',upload.single('avatar'),staffController.update);
router.delete('/delete/:id',staffController.delete);
router.delete('/delete/force/:id',staffController.destroy);
router.patch('/restore/:id',staffController.restore);
router.get('/trash',staffController.trash);
router.get('/list',staffController.index);
// router.get('/:slug',productController.show);


module.exports = router;
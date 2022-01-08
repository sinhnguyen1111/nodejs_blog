const express = require('express');
const multer = require('multer');
const path = require('path');
const appRoot = require('app-root-path');
const router = express.Router();


const userController = require('../app/controllers/backend/UsersController');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,appRoot + "/src/public/backend/uploads/");
    },
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
});

let upload = multer({storage: storage});

router.get('/create',userController.create);
router.post('/store',upload.single('avatar'),userController.store);
router.get('/edit/:id',userController.edit);
router.put('/update/:id',upload.single('avatar'),userController.update);
router.delete('/delete/:id',userController.delete);
router.delete('/delete/force/:id',userController.destroy);
router.patch('/restore/:id',userController.restore);
router.get('/trash',userController.trash);
router.get('/list',userController.index);
// router.get('/:slug',productController.show);


module.exports = router;
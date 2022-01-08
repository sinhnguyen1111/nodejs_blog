const express = require('express');
const multer = require('multer');
const path = require('path');
const appRoot = require('app-root-path');
const router = express.Router();
const moment = require('moment');

const bookingController = require('../app/controllers/backend/BookingsController');
const bookingClientController = require('../app/controllers/client/BookingClientController');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,appRoot + "/src/public/backend/uploads/");
    },
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
});

let upload = multer({storage: storage});

// router.get('/create',bookingController.create);
// router.post('/store',bookingController.store);
// router.get('/edit/:id',bookingController.edit);
// router.put('/update/:id',bookingController.update);
// router.delete('/delete/:id',bookingController.delete);
// router.delete('/delete/force/:id',bookingController.destroy);
// router.patch('/restore/:id',bookingController.restore);
// router.get('/trash',bookingController.trash);
router.get('/list',bookingController.index);
// router.get('/list-all-booking',bookingController.listAllBooking);


router.get('/get-service',bookingClientController.getService);
router.get('/get-staff',bookingClientController.getStaff);
router.post('/',bookingClientController.submitFormBooking);

// router.get('/:slug',productController.show);


module.exports = router;
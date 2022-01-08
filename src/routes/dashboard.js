const express = require('express');
const authenticate = require('../middleware/authorization');
const router = express.Router();

const dashboardController = require('../app/controllers/backend/DashboardController');
const authLoginController = require('../app/controllers/auth/AuthLoginController');

router.put('/approve',dashboardController.approve);
router.put('/cancel',dashboardController.cancel);
router.delete('/delete',dashboardController.delete);
router.put('/update',dashboardController.update);
router.put('/complete',dashboardController.complete);
router.get('/get-service',dashboardController.getService);
router.get('/get-staff',dashboardController.getStaff);
router.get('/find-by-id',dashboardController.findById);
router.get('/list-all-booking',dashboardController.listAllBooking);
router.get('/',authenticate,dashboardController.home);


//Login

router.get('/login',authLoginController.login);
router.post('/login',authLoginController.loginManager);
router.get('/logout',authLoginController.logout);


module.exports = router;
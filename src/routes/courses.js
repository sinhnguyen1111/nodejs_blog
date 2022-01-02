const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/backend/CoursesController');

router.get('/create',courseController.create);
router.post('/store',courseController.store);
router.get('/edit/:id',courseController.edit);
router.put('/update/:id',courseController.update);
router.get('/list',courseController.index);
router.get('/:slug',courseController.show);


module.exports = router;
// const Course = require('../models/Course');
// const {mutipleMongooseToObject} = require('../../until/mongoose');

const { use } = require("../../../routes/sites");

class SitesController{
    // home(req,res,next){
    //     Course.find({})
    //         .then(courses =>
    //            res.render('backend/layouts/main-backend',{course: courses})
    //            )
    //         .catch(next);
    // };
    home(req, res) {
        res.render('client/sites/home');
    };
    about(req, res) {
        res.render('client/sites/about');
    };
    contactUs(req, res){
        res.render('client/sites/contact');
    }
    thanks(req,res,next){
        res.render('client/sites/thankyou');
    }
}

module.exports = new SitesController;
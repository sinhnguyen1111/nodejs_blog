const Category = require('../../models/Category');
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
    
    hairService(req, res) {
        Category.find({type: "Service"})
        .then(items => res.render('client/sites/hairService',{cats: items}));
    };
    hairProblem(req, res){
        // Category.find({type: "Service"})
        var type = req.query.type || '';
        res.render('client/sites/hairProblem/hairProblem', {type: type});
    }
    hairStyle(req,res){
        res.render('client/sites/hairStyle/hairStyle');
    }
    hairStyleGallery(req,res){
        res.render('client/sites/hairStyle/galleryphoto');
    }
    clientProducts(req,res){
        if(req.query.category){
            product.find({
                category:req.query.category,
            })
                .then(product => {
                    res.render('client/sites/products/products', {
                        product: product,
                    });
                })
                .catch(next);
        } else
        {
            res.render('client/sites/products/list');
        }
    }
    booking(req, res) {
        res.render('client/sites/booking');
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
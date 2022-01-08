const Category = require('../../models/Category');
// const {mutipleMongooseToObject} = require('../../until/mongoose');
const Product= require('../../models/Product');
const Type= require('../../models/Type');
const Service = require('../../models/Service');

const { use } = require("../../../routes/sites");

class HomeClientController{
    async home(req, res,next) {
        const limitS=4;
        const limitP=2;
        const categoriesS = await Service.find({}).sort({createdAt: -1}).limit(limitS);
        const categoriesP= await Category.find({type: "Product"}).limit(limitP);
           res.render('client/sites/home',{cate: categoriesP,categoriesS})
           
    };
    getcategoryS(req, res, next) {
        Category.find({type: "Service"})
                .then(cateS => res.json(cateS))
                .catch(next);
        };
    getcategoryP(req, res, next){
        Category.find({type: "Product"})
            .then((cateP) => res.json(cateP))
            .catch(next);
        }
        getType(req, res, next){
        Type.find({})
            .then((types) => res.json(types))
            .catch(next);
        }
  
}

module.exports = new HomeClientController;
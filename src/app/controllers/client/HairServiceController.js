const Category = require('../../models/Category');
// const {mutipleMongooseToObject} = require('../../until/mongoose');
const Product= require('../../models/Product');
const Type= require('../../models/Type');

const { use } = require("../../../routes/sites");
const Service = require('../../models/Service');

class HairServiceController{
    hairService(req, res) {
        Category.find({type: "Service"})
        .then(items => res.render('client/sites/hairService',{cats: items}));
    };
    async show(req,res,next){
        const categories =await Category.find({type: "Service"})
        const getCate = await Category.findOne({slug: req.params.slug})
        //lấy ra tất cả các dịch vụ cùng danh mục
        const getServiceCate = await Service.find({category: getCate.name})
        // res.json(getServiceCate);
        res.render('client/sites/hairService',{categories:categories, getSC: getServiceCate});
    }
}

module.exports = new HairServiceController;
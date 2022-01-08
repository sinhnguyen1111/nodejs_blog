const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);
const Product = new Schema(
    {
        name: {type: String,maxLength:255},
        price: {type: String},
        description: {type: String},
        image: {type: Array},
        highlight: {type: String},
        shipping: {type: String},
        quanlity: {type: Number},
        slug: {type: String, maxLength:255,slug: 'name',unique:true},
        category: {type: String},
    },
    {
        timestamps: true,
    }
);
Product.plugin(mongooseDelete,{deletedAt : true,overrideMethods: 'all'});

module.exports = mongoose.model('Product', Product);
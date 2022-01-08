const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);
const Service = new Schema(
    {
        name: {type: String,maxLength:255},
        introduce: {type: String},
        price: {type: String},
        description: {type: String},
        image: {type: Array},
        title: {type: String},
        slug: {type: String, maxLength:255,slug: 'name',unique:true},
        category: {type: String},
    },
    {
        timestamps: true,
    }
);
Service.plugin(mongooseDelete,{deletedAt : true,overrideMethods: 'all'});

module.exports = mongoose.model('Service', Service);
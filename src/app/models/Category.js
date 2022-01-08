const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);
const Category = new Schema(
{
		name: {type: String},
		description: {type: String},
        type: {type: String},//service or product
        image: {type: String},
        slug: {type: String, maxLength:255,slug: 'name',unique:true},
    },
    {
        timestamps: true,
    }
);
Category.plugin(mongooseDelete,{deletedAt : true,overrideMethods: 'all'});

module.exports = mongoose.model('Category', Category);

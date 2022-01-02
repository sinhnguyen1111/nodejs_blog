const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);
const Staff = new Schema(
 {
		name: {type: String},
		star: {type: Number},
		introduce: {type: String},
        avatar: {type: String,maxlength:255},
    },
    {
        timestamps: true,
    }
);
Staff.plugin(mongooseDelete,{deletedAt : true,overrideMethods: 'all'});

module.exports = mongoose.model('Staff',Staff);

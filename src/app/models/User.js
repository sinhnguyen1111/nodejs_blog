const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);
const User = new Schema(
 {
		name: {type: String},
		email: {type: String},
		password: {type: String},
        avatar: {type: String,maxlength:255},
    },
    {
        timestamps: true,
    }
);
User.plugin(mongooseDelete,{deletedAt : true,overrideMethods: 'all'});

// User.methods.generateHash = function (password) {
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// User.methods.validPassword = function (password) {
// 	return bcrypt.compareSync(password, this.local.password);
// };

module.exports = mongoose.model('User', User);

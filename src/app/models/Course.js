const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    name:{type: String,maxLength:255},
    description: {type:String,maxLength:255},
    image: {type: String, maxLength:255},
    slug: {type: String, maxLength:255,slug: 'name',unique:true},
    videoId:{type:String,maxLength:255},
},{
    timestamps:true,
});

module.exports = mongoose.model('Course',Course);

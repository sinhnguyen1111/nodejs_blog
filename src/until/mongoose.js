module.exports = {
    mutipleMongooseToObject: function (mongooses){
        return mongooses.map(mongooses => mongooses.toObject());
    },
    //nesu co 1 docs
    mongooseToOject: function (mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongooseDelete = require('mongoose-delete');

const Booking = new Schema(
    {
        fullname: {type: String,maxLength:255},
        phone: {type: String},
        email: {type: String},
        address: {type: String},
        service_id: {type: Schema.Types.ObjectId, ref: 'Service'},
        staff_id: { type: Schema.Types.ObjectId, ref: 'Staff' },
        datetime: {type: Date},
		comment: {type: String},
        rating: { type: Number, default: 0 },
		status: { type: Number, default: 1 },
    },
    {
        timestamps: true,
    }
);
Booking.plugin(mongooseDelete,{deletedAt : true,overrideMethods: 'all'});

module.exports = mongoose.model('Booking', Booking);
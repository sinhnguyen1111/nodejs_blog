const Booking = require('../../models/Booking');
const Category = require('../../models/Category');
const Service = require('../../models/Service');
const Staff = require('../../models/Staff');
const mongoose = require('mongoose');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
var session = require('express-session');
var jwt = require('jsonwebtoken');

class DashboardController{
    home(req,res,next){
        var name = req.session.name;
        res.render('backend/layouts/main-backend',{name: name});
    };
    listAllBooking(req, res, next){
        Booking.aggregate([
            {
                $lookup: {
                    from: 'services',
                    localField: 'service_id',
                    foreignField: '_id',
                    as: 'Service',
                },
            },
            { $unwind: '$Service' },
            {
                $lookup: {
                    from: 'staffs',
                    localField: 'staff_id',
                    foreignField: '_id',
                    as: 'Staff',
                },
            },
            { $unwind: '$Staff' },
            {
                $sort: { status: 1, datetime: 1 },
            },
        ])
            // .sort({
            // 	datetime: 'asc',
            // })
            .then((booking) => res.json(booking))
            .catch(next);
    }
    findById(req,res,next){
        Booking.aggregate([
            { $match: { _id: mongoose.Types.ObjectId(req.query._id) } },
            {
                $lookup: {
                    from: 'services',
                    localField: 'service_id',
                    foreignField: '_id',
                    as: 'Service',
                },
            },
            { $unwind: '$Service' },
            {
                $lookup: {
                    from: 'staffs',
                    localField: 'staff_id',
                    foreignField: '_id',
                    as: 'Staff',
                },
            },
            { $unwind: '$Staff' },
        ])
            // .sort({
            // 	datetime: 'asc',
            // })
            .then((booking) => res.json(booking))
            .catch(next);
    }
    approve(req,res,next){
        Booking.updateOne({ _id: req.body._id }, req.body)
		.then(() => res.send('This appointment has been Approve!'))
		.catch((error) => {});
    }
    cancel(req,res,next){
        Booking.updateOne({ _id: req.body._id }, req.body)
		.then(() => res.send('This appointment has been cancelled!'))
		.catch((error) => {});
    }
    update(req,res,next){
        Booking.updateOne({ _id: req.body._id }, req.body)
		.then(() => res.send('This appointment has been updated!'))
		.catch((error) => {});
    }
    complete(req,res,next){
        Booking.updateOne({ _id: req.body._id }, req.body)
		.then(() => res.send('This appointment has been Completed!'))
		.catch((error) => {});
    }
    delete(req,res,next){
        Booking.deleteOne({ _id: req.body._id })
		.then(() => res.send('Your appointment has been deleted!'))
		.catch((error) => {});
    }
    getService(req,res,next){
        Service.find({})
		.then((services) => res.json(services))
		.catch(next);
    }
    getStaff(req,res,next){
        Staff.find({})
		.then((staffs) => res.json(staffs))
		.catch(next);
    }

    
}

module.exports = new DashboardController;
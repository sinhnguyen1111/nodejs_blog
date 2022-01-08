const Category = require('../../models/Category');
const Service = require('../../models/Service');
const Staff = require('../../models/Staff');
const Booking = require('../../models/Booking');
// const {mutipleMongooseToObject} = require('../../until/mongoose');

// const { use } = require("../../../routes/sites");

class BookingClientController{
    // home(req,res,next){
    //     Course.find({})
    //         .then(courses =>
    //            res.render('backend/layouts/main-backend',{course: courses})
    //            )
    //         .catch(next);
    // };
   getService(req, res, next) {
    Service.find({})
            .then(services => res.json(services))
            .catch(next);
    };
    getStaff(req, res, next){
        Staff.find({})
        .then((staffs) => res.json(staffs))
        .catch(next);
    }
   
    submitFormBooking(req, res, next){
        // const formData = req.body;
        const booking = new Booking({
            fullname: req.body.fullname,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
            service_id: req.body.service_id,
            staff_id: req.body.staff_id,
            datetime: req.body.datetime,

        });
        booking
            .save()
            .then(() => res.json(booking))
            .catch((error) => {});
    }
    
}

module.exports = new BookingClientController;
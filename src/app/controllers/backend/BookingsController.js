const Booking = require('../../models/Booking.js');
const Category = require('../../models/Category');
const moment = require('moment');
class BookingsController{

    index(req,res,next){
        Booking.find({})
            .then(products => res.render('backend/booking/list',{
                products,name: req.session.name
            }))
            .catch(next);
    }
    // show(req,res,next){
    //     Product.findOne({slug: req.params.slug})
    //         .then(product=> {
    //             res.render('products/detail',{
    //                 product
    //             });
    //         })
    //         .catch(next);
    // }
    // create(req,res,next){
    //     Category.find({type: "Product"})
    //         .then(items => res.render('backend/products/create',{cats: items}));
        
    // }

    // store(req,res,next){
    //     let product = new Booking({
    //         name: req.body.name,
    //         description: req.body.description,
    //         price: req.body.price,
    //         quanlity: req.body.quanlity,
    //         category: req.body.category,
    //     });

    //     if(req.files) 
    //     {
    //         let nameImages='';
    //         req.files.forEach(function(files, i, arr){
    //             nameImages = nameImages + files.filename + ',';
    //        });
    //        nameImages = nameImages.substring(0, nameImages.lastIndexOf(","));
    //         product.image = nameImages.split(','); 
    //     }
    //     product.save()
    //         .then(() => res.redirect('/products/list'))
    //         .catch(next);
    // }

    // edit(req,res,next){
    //     var listCategory=[];
    //     Category.find({type: "Product"},function(err,items){
    //         Booking.findById(req.params.id)
    //         .then((product) => res.render('backend/products/edit',{
    //             product,items
    //             }))
        
    //         .catch(next);
    //     })
        

        
    // }
    // update(req,res,next){
    //     const formData = req.body
    //     if(req.files) 
    //     {
    //         let nameImages='';
    //         req.files.forEach(function(files, i, arr){
    //             nameImages = nameImages + files.filename + ',';
    //        });
    //        nameImages = nameImages.substring(0, nameImages.lastIndexOf(","));
    //        formData.image = nameImages.split(','); 
    //     }
    //     Product.updateOne({_id: req.params.id},formData)
    //         .then(() => res.redirect('/products/list'))
    //         .catch(next)
    // }
    // delete(req,res,next){
    //     Product.delete({_id: req.params.id})
    //         .then(() =>res.redirect('back'))
    //         .catch(next)
    // }
    // trash(req,res,next){
    //     Product.findDeleted({})
    //     .then(products => res.render('backend/products/trash',{
    //         products
    //     }))
    //     .catch(next);
    // }
    // restore(req,res,next){
    //     Product.restore({_id: req.params.id})
    //     .then(() => res.redirect('back'))
    //     .catch(next);
    // }
    // destroy(req,res,next){
    //     Product.deleteOne({_id: req.params.id})
    //     .then(() => res.redirect('back'))
    //     .catch(next);
    // }
    // listAllBooking(req, res, next){
    //     Booking.aggregate([
    //         {
    //             $lookup: {
    //                 from: 'services',
    //                 localField: 'service_id',
    //                 foreignField: '_id',
    //                 as: 'Service',
    //             },
    //         },
    //         { $unwind: '$Service' },
    //         {
    //             $lookup: {
    //                 from: 'staffs',
    //                 localField: 'staff_id',
    //                 foreignField: '_id',
    //                 as: 'Staff',
    //             },
    //         },
    //         { $unwind: '$Staff' },
    //         {
    //             $sort: { status: 1, datetime: 1 },
    //         },
    //     ])
    //         // .sort({
    //         // 	datetime: 'asc',
    //         // })
    //         .then((booking) => res.json(booking))
    //         .catch(next);
    // }
    
    
}

module.exports = new BookingsController;
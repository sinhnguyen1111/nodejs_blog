const Staff = require('../../models/Staff');
const bcrypt = require('bcryptjs');
const multer  = require('multer');
const path = require('path');

class StaffsController {

    index(req,res,next){
        Staff.find({})
            .then(staffs => res.render('backend/staffs/list',{
                staffs
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
    create(req,res,next){
        res.render('backend/staffs/create');
    }
    
    store(req,res,next){
        const formData = req.body;
        formData.avatar = req.file.filename;
        const staff = new Staff(formData);
        staff.save()
            .then(() => res.redirect('/staffs/list'))
            .catch(next);
        
    }

    edit(req,res,next){
        Staff.findById(req.params.id)
            .then(staff => res.render('backend/staffs/edit',{
                staff
                }))
        
            .catch(next);
    }
    update(req,res,next){
        const formData = req.body;
        formData.avatar = req.file.filename;
        Staff.updateOne({_id: req.params.id},formData)
            .then(() => res.redirect('/staffs/list'))
            .catch(next)
    }
    delete(req,res,next){
        Staff.delete({_id: req.params.id})
            .then(() =>res.redirect('back'))
            .catch(next)
    }
    trash(req,res,next){
        Staff.findDeleted({})
        .then(users => res.render('backend/staffs/trash',{
            users
        }))
        .catch(next);
    }
    restore(req,res,next){
        Staff.restore({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
    destroy(req,res,next){
        Staff.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
    
}

module.exports = new StaffsController;
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const multer  = require('multer');
const path = require('path');

class UsersController{

    index(req,res,next){
        User.find({})
            .then(users => res.render('backend/users/list',{
                users
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
        res.render('backend/users/create');
    }
    
    store(req,res,next){
        const formData = req.body;
        const pass = formData.password;
        // formData.avatar = req.file.filename;
        // res.json(avatar);
        // const upload = multer().single('avatar');
        // const fileAvt = req.body;
        // res.json(formData);
      
        console.log(formData.avatar);
        // upload(req, res, function(err) {
        //     // req.file contains information of uploaded file
        //     // req.body contains information of text fields, if there were any
            
        //     if (req.fileValidationError) {
        //         return res.send(req.fileValidationError);
        //     }
        //     else if (!req.file) {
        //         return res.send('Please select an image to upload');
        //     }
        //     else if (err instanceof multer.MulterError) {
        //         return res.send(err);
        //     }
        //     else if (err) {
        //         return res.send(err);
        //     }
        // });

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(pass, salt, function(err, hash) {
                formData.password = hash;
                formData.avatar = req.file.filename;
                const user = new User(formData);
                user.save()
                    .then(() => res.redirect('/users/list'))
                    .catch(next);
            });
        });
        
    }

    edit(req,res,next){
        User.findById(req.params.id)
            .then(user => res.render('backend/users/edit',{
                user
                }))
        
            .catch(next);
    }
    update(req,res,next){
        User.updateOne({_id: req.params.id},req.body)
            .then(() => res.redirect('/users/list'))
            .catch(next)
    }
    delete(req,res,next){
        User.delete({_id: req.params.id})
            .then(() =>res.redirect('back'))
            .catch(next)
    }
    trash(req,res,next){
        User.findDeleted({})
        .then(users => res.render('backend/users/trash',{
            users
        }))
        .catch(next);
    }
    restore(req,res,next){
        User.restore({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
    destroy(req,res,next){
        User.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
    
}

module.exports = new UsersController;
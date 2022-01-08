const Type = require('../../models/Type');
const bcrypt = require('bcryptjs');
const multer  = require('multer');
const path = require('path');

class TypesController{

    index(req,res,next){
        Type.find({})
            .then(types => res.render('backend/types/list',{
                types,name: req.session.name
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
        res.render('backend/types/create',{
            name: req.session.name
        });
    }
    
    store(req,res,next){
        const formData = req.body;
        
        const type = new Type(formData);
        type.save()
            .then(() => res.redirect('/types/list'))
            .catch(next);
        
    }

    edit(req,res,next){
        Type.findById(req.params.id)
            .then(type => res.render('backend/types/edit',{
                type,name: req.session.name
                }))
        
            .catch(next);
    }
    update(req,res,next){
        Type.updateOne({_id: req.params.id},req.body)
            .then(() => res.redirect('/types/list'))
            .catch(next)
    }
    delete(req,res,next){
        Type.delete({_id: req.params.id})
            .then(() =>res.redirect('back'))
            .catch(next)
    }
    trash(req,res,next){
        Type.findDeleted({})
        .then(type => res.render('backend/types/trash',{
            type,name: req.session.name
        }))
        .catch(next);
    }
    restore(req,res,next){
        Type.restore({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
    destroy(req,res,next){
        Type.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
    
}

module.exports = new TypesController;
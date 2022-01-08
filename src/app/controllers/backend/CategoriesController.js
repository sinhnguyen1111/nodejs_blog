const Category = require('../../models/Category');
const bcrypt = require('bcryptjs');
const multer  = require('multer');
const path = require('path');

class CategoriesController{

    index(req,res,next){
        Category.find({})
            .then(categories => res.render('backend/categories/list',{
                categories,name: req.session.name,
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
        res.render('backend/categories/create',{name: req.session.name});
    }
    
    store(req,res,next){
        // const formData = req.body;
        
        const category = new Category({
            name: req.body.name,
            description: req.body.description,
            type: req.body.category,
            image: req.file.filename,
        });
        category.save()
            .then(() => res.redirect('/categories/list'))
            .catch(next);
        
    }

    edit(req,res,next){
        Category.findById(req.params.id)
            .then(category => res.render('backend/categories/edit',{
                category,name: req.session.name
                }))
        
            .catch(next);
    }
    update(req,res,next){
        Category.updateOne({_id: req.params.id},{
            name: req.body.name,
            description: req.body.description,
            type: req.body.category,
            image: req.file.filename,
        })
            .then(() => res.redirect('/categories/list'))
            .catch(next)
    }
    delete(req,res,next){
        Category.delete({_id: req.params.id})
            .then(() =>res.redirect('back'))
            .catch(next)
    }
    trash(req,res,next){
        Category.findDeleted({})
        .then(category => res.render('backend/categories/trash',{
            category,name: req.session.name
        }))
        .catch(next);
    }
    restore(req,res,next){
        Category.restore({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
    destroy(req,res,next){
        Category.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
    
}

module.exports = new CategoriesController;
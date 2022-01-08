const Product = require('../../models/Product');
const Category = require('../../models/Category');
class ProductsController{

    index(req,res,next){
        Product.find({})
            .then(products => res.render('backend/products/list',{
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
    create(req,res,next){
        Category.find({type: "Product"})
            .then(items => res.render('backend/products/create',{
                cats: items,
                name: req.session.name,
            
            }));
        
    }

    store(req,res,next){
        let product = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            quanlity: req.body.quanlity,
            category: req.body.category,
        });

        if(req.files) 
        {
            let nameImages='';
            req.files.forEach(function(files, i, arr){
                nameImages = nameImages + files.filename + ',';
           });
           nameImages = nameImages.substring(0, nameImages.lastIndexOf(","));
            product.image = nameImages.split(','); 
        }
        product.save()
            .then(() => res.redirect('/products/list'))
            .catch(next);
    }

    edit(req,res,next){
        var listCategory=[];
        Category.find({type: "Product"},function(err,items){
            Product.findById(req.params.id)
            .then((product) => res.render('backend/products/edit',{
                product,items,name: req.session.name
                }))
        
            .catch(next);
        })
        

        
    }
    update(req,res,next){
        const formData = req.body
        if(req.files) 
        {
            let nameImages='';
            req.files.forEach(function(files, i, arr){
                nameImages = nameImages + files.filename + ',';
           });
           nameImages = nameImages.substring(0, nameImages.lastIndexOf(","));
           formData.image = nameImages.split(','); 
        }
        Product.updateOne({_id: req.params.id},formData)
            .then(() => res.redirect('/products/list'))
            .catch(next)
    }
    delete(req,res,next){
        Product.delete({_id: req.params.id})
            .then(() =>res.redirect('back'))
            .catch(next)
    }
    trash(req,res,next){
        Product.findDeleted({})
        .then(products => res.render('backend/products/trash',{
            products,name: req.session.name
        }))
        .catch(next);
    }
    restore(req,res,next){
        Product.restore({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
    destroy(req,res,next){
        Product.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
    
}

module.exports = new ProductsController;
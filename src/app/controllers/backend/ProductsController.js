const Product = require('../../models/Product');

class ProductsController{

    index(req,res,next){
        Product.find({})
            .then(products => res.render('backend/products/list',{
                products
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
        res.render('backend/products/create');
    }
    store(req,res,next){
        // const formData = req.body;
        // formData.image = "https://ytb.vn/wp-content/uploads/2021/01/youtube-video_800x450-750x375.jpg";
        // const product = new Product(formData);
        // product.save();

        // res.redirect('/products/list');
        const formData = req.body;
        formData.image = "https://ytb.vn/wp-content/uploads/2021/01/youtube-video_800x450-750x375.jpg";
        const product = new Product(formData);
        product.save()
            .then(() => res.redirect('/products/list'))
            .catch(next);
        
    }
    edit(req,res,next){
        Product.findById(req.params.id)
            .then(product => res.render('backend/products/edit',{
                product
                }))
        
            .catch(next);
    }
    update(req,res,next){
        Product.updateOne({_id: req.params.id},req.body)
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
            products
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
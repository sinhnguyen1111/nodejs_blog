const Service = require('../../models/Service');
const Category = require('../../models/Category');
class ServicesController{

    index(req,res,next){
        Service.find({})
            .then(services => res.render('backend/services/list',{
                services,name: req.session.name
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
        Category.find({type: "Service"})
            .then(items => res.render('backend/services/create',{
                cats: items,
                name: req.session.name
            }));
        
    }

    store(req,res,next){
        let service = new Service({
            name: req.body.name,
            introduce: req.body.introduce,
            description: req.body.description,
            price: req.body.price,
            title: req.body.title,
            category: req.body.category,
        });

        if(req.files) 
        {
            let nameImages='';
            req.files.forEach(function(files, i, arr){
                nameImages = nameImages + files.filename + ',';
           });
           nameImages = nameImages.substring(0, nameImages.lastIndexOf(","));
            service.image = nameImages.split(','); 
        }
        service.save()
            .then(() => res.redirect('/services/list'))
            .catch(next);
    }

    edit(req,res,next){
        var listCategory=[];
        Category.find({type: "Service"},function(err,items){
            Service.findById(req.params.id)
            .then((service) => res.render('backend/services/edit',{
                service,items,name: req.session.name
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
        Service.updateOne({_id: req.params.id},formData)
            .then(() => res.redirect('/services/list'))
            .catch(next)
    }
    delete(req,res,next){
        Service.delete({_id: req.params.id})
            .then(() =>res.redirect('back'))
            .catch(next)
    }
    trash(req,res,next){
        Service.findDeleted({})
        .then(products => res.render('backend/services/trash',{
            products,name: req.session.name
        }))
        .catch(next);
    }
    restore(req,res,next){
        Service.restore({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
    destroy(req,res,next){
        Service.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
    
}

module.exports = new ServicesController;
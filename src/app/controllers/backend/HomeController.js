class HomeController{
    home(req,res,next){
        res.render('backend/layouts/main-backend');
    };
    
}

module.exports = new HomeController;
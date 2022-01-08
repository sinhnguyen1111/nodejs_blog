var jwt = require('jsonwebtoken');

const authenticate = (req,res,next) =>{
    if(req.session.email){
        return next();
    }
  
    res.redirect('/manage/login');
}
module.exports=authenticate 
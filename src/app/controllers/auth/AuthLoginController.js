const Booking = require('../../models/Booking');
const Category = require('../../models/Category');
const Service = require('../../models/Service');
const Staff = require('../../models/Staff');
const mongoose = require('mongoose');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
var session = require('express-session');
var jwt = require('jsonwebtoken');

class AuthLoginController{
    login(req,res,next){
        res.render('auth/login');
    }

    loginManager(req,res,next){
        var email = req.body.email;
        var password = req.body.password;

        User.findOne({email:email})
            .then(user => {
                if(user){
                    bcrypt.compare(password, user.password, function(err, result) {
                        if(err){
                            res.json({
                                error: err
                            })
                        }
                        if(result){
                            // let token  =jwt.sign({name: user.name},'verySecretValue',{expiresIn: '1h'})
                            // res.json({
                            //     message: 'Login Successful',
                            //     token
                            // })
                            // res.render('backend/layouts/main-backend',{token: token});
                            var sess = req.session;
                            sess.name= user.name;
                            sess.email = user.email;
                            res.redirect('/manage');
                            
                        }
                        else{
                            res.redirect('/manage/login');
                            // res.json({
                            //     message: 'Mật khẩu sai'
                            // })
                        }
                    })
                }else{
                    // res.json({
                    //     message: 'Email không tồn tại'
                    // })
                    res.redirect('/manage/login');
                }
            })
    }
    logout(req,res,next){
        req.session.destroy((err) => {
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/manage/login');
            }
        });
    }
    
}

module.exports = new AuthLoginController;
const Course = require('../../models/Course');
const {mongooseToOject} = require('../../../until/mongoose');

class CoursesController{
//     home(req,res,next){
//     //     Course.find({})
//     //         .then(courses => {
               
//     //             res.render('home',{
//     //                 courses: mutipleMongooseToObject(courses)
//     //             });
//     //         })
//     //         .catch(next);
//     // };
//     search(req,res){
//         res.render('search');
//     };
    index(req,res,next){
        Course.find({})
            .then(courses => res.render('backend/courses/list',{courses: courses.map(courses => courses.toObject())}))
            .catch(next);
    }
    show(req,res,next){
        Course.findOne({slug: req.params.slug})
            .then(course=> {
                res.render('backend/courses/detail',{
                    course: mongooseToOject(course)
                });
            })
            .catch(next);
    }
    create(req,res,next){
        res.render('backend/courses/create');
    }
    store(req,res,next){
        const formData = req.body;
        formData.image = "https://ytb.vn/wp-content/uploads/2021/01/youtube-video_800x450-750x375.jpg";
        const course = new Course(formData);
        course.save();

        res.redirect('/');
    }
    edit(req,res,next){
        Course.findById(req.params.id)
            .then(course => res.render('backend/courses/edit',{
                    course: mongooseToOject(course)
                }))
        
            .catch(next);
    }
    update(req,res,next){
        Course.updateOne({_id: req.params.id},req.body)
            .then(() => res.redirect('/courses/list'))
            .catch(next)
    }
}

module.exports = new CoursesController;
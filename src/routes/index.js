const siteRouter = require('./sites');
const dashboardRouter = require('./dashboard');
const productRouter = require('./products');
const userRouter = require('./users');
const staffRouter = require('./staffs');
const typeRouter = require('./types');

function route(app){
   
    

    // app.use('/courses', courseRouter);
    
    app.use('/products', productRouter);
    
    app.use('/users',userRouter);

    app.use('/staffs',staffRouter);

    app.use('/types',typeRouter);

    app.use('/search', siteRouter);
    
    app.use('/', siteRouter);

    app.use('/manage',dashboardRouter);
}

module.exports = route;

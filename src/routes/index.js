const siteRouter = require('./sites');
const dashboardRouter = require('./dashboard');
const productRouter = require('./products');
const userRouter = require('./users');
const staffRouter = require('./staffs');
const typeRouter = require('./types');
const CategoryRouter = require('./categories');
const BookingRouter = require('./booking');
const ServiceRouter = require('./services');
const authenticate = require('../middleware/authorization');

function route(app){
    
    app.use('/products',productRouter);
    
    app.use('/users',authenticate,userRouter);

    app.use('/staffs',authenticate,staffRouter);

    app.use('/types',authenticate,typeRouter);

    app.use('/categories',authenticate,CategoryRouter);

    app.use('/booking',BookingRouter);

    app.use('/services',authenticate,ServiceRouter);
    
    app.use('/', siteRouter);

    app.use('/manage',dashboardRouter);

    //client
 

}

module.exports = route;

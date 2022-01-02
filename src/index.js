const path = require('path');
const express = require('express');
const morgan = require('morgan');
// const handlebars = require('express-handlebars');
const ejs = require('ejs');
const methodOverride = require('method-override');

const app = express();
const port = 5000;

const route = require('./routes');
const db = require('./config/db');


//connect db
db.connect();

app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('combined'));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'));

// app.engine('hbs', handlebars({
//   extname: '.hbs',
//   helpers:{
//     sum: (a,b) => a+b,
//   },
//   defaultLayout: "main-backend",
// }));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
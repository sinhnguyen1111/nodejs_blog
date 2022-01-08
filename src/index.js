const path = require('path');
const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');

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
var cookieParser = require('cookie-parser');
app.use(cookieParser())
const oneday = 1000*60*60*24;
app.use(session({ 
  secret: 'infinitycoder',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: oneday },
}));
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'))

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');  //不用服务端路由
var ejs = require('ejs');
var app = express();

var login = require('./public/js/login'); 
var register = require('./public/js/register'); 

// view engine setup
//这就可以使用.html后缀名 但是根本上还是ejs模板引擎
app.set('views', path.join(__dirname, 'mc'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'mc')));

app.use('/',routes);
app.post('/api/login',login.verify);
app.post('/api/register/addUser',register.addUser);
app.get('/api/CountryCode',register.getCountryCode);
app.post('/api/currentUserId',register.getCurrentUserId);
app.post('/api/register/addPatientInfo',register.patientInfoAdd);
app.post('/api/register/addGuardianInfo',register.guardianInfoAdd);
/*app.get('/',function (req,res){
	res.sendFile('./mc/index.html',{"root": __dirname});
});
*/



//404
/*app.use(function (req,res,next){
	res.status(404).send('NOT FOUND');
	res.status(400).sendFile('');
})
*/

app.listen(3000);
console.log('Server is running..');

module.exports = app;


/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'webui',
  port:3306
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));
app.use('/dist', express.static(path.join(__dirname, '/dist')));
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/font-awesome', express.static(path.join(__dirname, '/font-awesome')));
app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/js', express.static(path.join(__dirname, '/js')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/choose-IoT-Provide.ejs', function(req,res) {
	res.render('choose-IoT-Provide.ejs');
});

app.get('/next-step-ind.ejs', function(req,res) {
	res.render('next-step-ind.ejs');
});

app.get('/index.ejs', function(req,res) {
	res.render('index.ejs');
});

app.get('/apache-spaark.ejs', function(req,res) {
	res.render('apache-spaark.ejs');
});

app.get('/ibm-insight.ejs', function(req,res) {
	res.render('ibm-insight.ejs');
});

app.get('/iot-ind-cool.ejs', function(req,res) {
	res.render('iot-ind-cool.ejs');
});

app.get('/new-post.ejs', function(req,res) {
	res.render('new-post.ejs');
});

app.get('/home.ejs', function(req,res) {
	res.render('home.ejs');
});
app.get('/new-post.ejs', function(req,res) {
	res.render('new-post.ejs');
});
app.get('/new-post.ejs', function(req,res) {
	res.render('new-post.ejs');
});
app.get('/new-post.ejs', function(req,res) {
	res.render('new-post.ejs');
});
app.get('/bigdata.ejs', function(req,res) {
	res.render('bigdata.ejs');
});
app.get('/location.ejs', function(req,res) {
	res.render('location.ejs');
});
app.get('/management.ejs', function(req,res) {
	res.render('management.ejs');
});
//ioe-iot.ejs
app.get('/ioe-iot.ejs', function(req,res) {
	res.render('ioe-iot.ejs');
});
app.post('/downloadBroc', function(req,res) {
	console.log("qweqwe");
	 console.log("here"+req.body.fname);
	 	var fname = req.body.fname;
		var lname = req.body.lname;
		var email = req.body.email;
	
		console.log(fname);
		console.log("ajax posted successfully");
		
		//var con = connection.connect();
		console.log(connection);
		
		var post  = {fname: fname, lname: lname , email:email};
	
		var query = connection.query('INSERT INTO brochure SET ?', post, function(err, result) {
			if (!err){
			    console.log('Inserted');
			}
			  else
			    console.log('Error while inserting into db.'+err);
			
			});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

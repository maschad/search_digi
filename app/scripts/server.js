var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : '',
database : 'contacts'
});

connection.connect(function(){
	console.log("MySQL Database is Connected");
});

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res){

res.render('index.html');
var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'contacts'
});

connection.connect(function(){
	console.log("MySQL Database is Connected");
});

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res){

res.render('index.html');

});

app.get('/load',function(req,res){

connection.query("select * from users",
function(err,rows,fields){
if(err) throw err;
	res.end(JSON.stringify(rows));
});

});

app.listen(7001,function(){
	console.log("App is started at PORT 7001");
});
});

app.get('/load',function(req,res){

connection.query("select * from users",
function(err,rows,fields){
	if(err) throw err;
	res.end(JSON.stringify(rows));
});

});

app.listen(7001,function(){
	console.log("App is started at PORT 7001");
});
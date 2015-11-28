var mysql      = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'webui',
  port:3306
});


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
var pool = require('./pool');

exports.getPatientInfo = function (req,res){
	pool.getConnection(function (err,connection){
		connection.query('SELECT * FROM patient WHERE user_name = ?',[req.body.userName],function (err,results){


			connection.release();
		});
	});
}
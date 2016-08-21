var pool = require('./pool');

exports.getPatientInfo = function (req,res){
	pool.getConnection(function (err,connection){
		connection.query('SELECT * FROM patient WHERE registrar = ?',[req.body.registrar],function (err,results){
			if(err){
				console.log(err.message);
			}
			else{
				res.send(results[0]);
			}
			connection.release();
		});
	});
}
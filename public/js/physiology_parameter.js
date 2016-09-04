var pool = require('./pool');

exports.getPhysiologyParameter = function (req,res){
	pool.getConnection(function (err,connection){
		connection.query('SELECT ecg_td1_sj FROM ecg_01201650000002 WHERE seq=1150796',function (err,results){
			if(err){
				console.log(err.message);
			}
			else{
				res.send(results[0]);
			}
			connection.release();
		})
	});
}
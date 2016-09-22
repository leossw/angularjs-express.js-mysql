var pool = require('./pool');

exports.addNewPatient = function (req,res){
	pool.getConnection(function (err,connection){
		connection.query('SELECT authorization_guardian_verification_code,common_guardian_verification_code FROM patient WHERE name=?',[req.body.patientName],function (err,results){
			if(err){
				console.log(err.message);
				res.send('01');   //患者姓名不存在
			}
			//申请成为授权监护人
			else if(req.body.guardianType){
				if(req.body.verificationCode == results[0].authorization_guardian_verification_code){
					//执行添加授权监护人操作

				}else{
					res.send('02');		//授权监护人验证码不正确
				}
			}
			else{
				if(req.body.verificationCode == results[0].common_guardian_verification_code){
					//执行添加普通监护人操作

				}else{
					res.send('03');		//普通监护人验证码不正确
				}
			}
			connection.release();
		});
	});
}
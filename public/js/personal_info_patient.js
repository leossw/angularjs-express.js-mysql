var pool = require('./pool');

//获取患者个人信息
exports.getPatientInfo = function (req,res){
	pool.getConnection(function (err,connection){
		connection.query('SELECT * FROM patient WHERE registrar = ?',[req.body.registrar],function (err,results){
			if(err){
				console.log(err.message);
			}
			else{
				res.send(results[0]);		//返回患者个人信息
			}
			connection.release();
		});
	});
}

//修改患者个人信息
exports.changePatientInfo = function (req,res){
//	console.log(new Date(req.body.birthday));
	var birthday = new Date(req.body.birthday);
	pool.getConnection(function (err,connection){
		connection.query('UPDATE patient SET name=?,sex=?,birthday=?,country_code=?,certificate_type_code=?,identity_card=?,phone=?,mobile=?,email=?,weixin=?,address=?,postalcode=?,height=?,weight=?,blood_type_code=?,vital_signs=? WHERE registrar=?',
			[req.body.name,req.body.sex,birthday,req.body.countryCode,req.body.certificateType,req.body.idCard,req.body.fixedTel,req.body.mobilePhone,req.body.email,req.body.weChat,req.body.address,req.body.postalCode,req.body.height,req.body.weight,req.body.bloodType,req.body.mainDisease,req.body.registrar],function (err,results){
				if(err){
					res.send('02');		//信息修改失败返回02
					console.log(err.message);
				}
				else{
					res.send('01');		//信息修改成功返回01
				}
			connection.release();
		});
	});
}

//获取监控终端信息
exports.getMonitorTerminalInfo = function (req,res){
	pool.getConnection(function (err,connection){
		connection.query('SELECT * FROM monitor_terminal WHERE registrar = ?',[req.body.registrar],function (err,results){
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

//获取监护人授权码
exports.getGuardianVerificationCode = function (req,res){
	pool.getConnection(function (err,connection){
		connection.query('SELECT authorization_guardian_verification_code,common_guardian_verification_code FROM patient WHERE registrar = ?',[req.body.registrar],function (err,results){
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
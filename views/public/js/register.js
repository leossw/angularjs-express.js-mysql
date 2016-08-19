var pool = require('./pool');
var crypto = require('crypto');   //用sha1给密码加密

//注册添加用户
exports.addUser = function (req,res){
	var sha1 = crypto.createHash('sha1');    
	var userName = req.body.userName,
		password = sha1.update(req.body.password).digest('hex'),
		nickname = req.body.nickname,
		userType = req.body.userType;

	pool.getConnection(function (err,connection){
		connection.query('SELECT * FROM user WHERE username=?',[userName],function (err,results){
			if(err){
				console.log(err);
				return;
			}
			if(results[0]){
				res.send('用户名已存在');
				return;
			}
			else{
				connection.query('INSERT INTO user (username,password,user_nicename,user_type)VALUES(?,?,?,?)',
					[userName,password,nickname,userType],function (err,results){
						if(err){
							console.log(err);
							return;
						}
						res.send('注册成功');
					});
			}

			connection.release();
		});
	});
}

//为cookies获取用户id
exports.getCurrentUserId = function (req,res){
	var userName = req.body.userName;
	pool.getConnection(function (err,connection){
		connection.query('SELECT id FROM user WHERE username=?',[userName],function (err,results){
			res.send(results[0]);
			connection.release();
		});
	});
}

//获取国家编码
exports.getCountryCode = function (req,res){
	pool.getConnection(function (err,connection){
		connection.query('SELECT code,chinese_short_name FROM country_code',function (err,results){
			res.send(results);
			connection.release();
		});
	});
}

//添加患者个人信息
exports.patientInfoAdd = function (req,res){
	var birthday = req.body.birthday.slice(0,10);
	pool.getConnection(function (err,connection){
		connection.query('INSERT INTO patient (serial_number,name,sex,birthday,country_code,certificate_type_code,identity_card,phone,mobile,email,weixin,address,postalcode,height,weight,blood_type_code,vital_signs,registrar,register_time,patient_type_code,organization_id,common_guardian_verification_code,authorization_guardian_verification_code,user_id,remark) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
			[req.body.serialNumber,req.body.name,req.body.sex,birthday,req.body.countryCode,req.body.certificateType,req.body.idCard,req.body.fixedTel,req.body.mobilePhone,req.body.email,req.body.weChat,req.body.address,req.body.postalCode,req.body.height,req.body.weight,req.body.bloodType,req.body.mainDisease,req.body.registrar,req.body.registerTime,req.body.patientType,req.body.organizationId,req.body.commonGuardianVerificationCode,req.body.authorizationGuardianVerificationCode,req.body.userId,req.body.remark],function (err,results){
				if(err){
					res.send('02');   //信息添加失败返回02
					console.log(err.message);
				}
				else{
					res.send('01');   //信息添加成功返回01
				}
			connection.release();
		});
	});
}

//添加监护人个人信息
exports.guardianInfoAdd = function (req,res){
	pool.getConnection(function (err,connection){
		connection.query('INSERT INTO guardian (guardian_type_code,name,sex,phone,mobile,email,weixin,address,postalcode,organization_id,user_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
			[req.body.guardianType,req.body.name,req.body.sex,req.body.fixedTel,req.body.mobilePhone,req.body.email,req.body.wechat,req.body.address,req.body.postalCode,req.body.organizationId,req.body.userId],function (err,results){
			if(err){
				res.send('02');   //信息添加失败返回02
				console.log(err.message);
			}
			else{
				res.send('01');   //信息添加成功返回01
			}
			connection.release();
		});
	});
}

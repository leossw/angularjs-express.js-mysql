var pool = require('./pool');
var crypto = require('crypto');


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
			}else{
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

exports.getCurrentUserId = function (req,res){
	var userName = req.body.userName;
	pool.getConnection(function (err,connection){
		connection.query('SELECT id FROM user WHERE username=?',[userName],function (err,results){
			res.send(results);
			connection.release();
		});
	});
}

exports.getCountryCode = function (req,res){
	pool.getConnection(function (err,connection){
		connection.query('SELECT code,chinese_short_name FROM country_code',function (err,results){
			res.send(results);
			connection.release();
		});
	});
}



exports.patientInfoAdd = function (req,res){
	
}
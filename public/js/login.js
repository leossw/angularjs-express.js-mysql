var pool = require('./pool');
var crypto = require('crypto');

//用户登录验证
exports.verify = function(req,res){
	var sha1 = crypto.createHash('sha1');
	var userName = req.body.userName;
	var password = sha1.update(req.body.password).digest('hex');
//	if(userName == ''||password == ''){
//		res.send('用户名或密码不能为空');
//		return;
//	}
//01:登陆成功，跳转至home_patient.
//02:登陆成功，跳转至home_guardian.
	pool.getConnection(function (err,connection){
		connection.query('SELECT * FROM user WHERE username = ?',[userName],function (err,results){
			if(err){
				console.log(err);
				return;
			}
			if(results == ''){
				res.send('用户名不存在');
			}
			else if(results[0].password !== password){
				res.send('密码错误');
			}
			else if(results[0].user_type == 01){
				res.send('患者用户');
			}
			else if(results[0].user_type == 02){
				res.send('监护人用户');
			}

		connection.release();
		});
	});

}



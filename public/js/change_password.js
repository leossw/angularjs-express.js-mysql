var pool = require('./pool');
var crypto = require('crypto');   //用sha1给密码加密

//修改用户密码
exports.changeIt = function (req,res){
	var oldPassword = crypto.createHash('sha1').update(req.body.oldPassword).digest('hex'),   //原密码sha1加密
		newPassword = crypto.createHash('sha1').update(req.body.newPassword).digest('hex');   //新密码sha1加密
	
	pool.getConnection(function (err,connection){
		connection.query('SELECT password FROM user WHERE username = ?',[req.body.userName],function (err,results){
			if(err){
				console.log(err.message);
			}
			else if(oldPassword == results[0].password){
				connection.query('UPDATE user SET password = ? WHERE username = ?',[newPassword,req.body.userName],function (err,results){
					if(err){
						console.log(err.message);
					}
					else{
						res.send('修改成功,请重新登陆');  //返回'密码修改成功'
					}
				});
			}
			else{
				res.send('原密码不正确');   //返回'原密码不正确'
			}
			connection.release();
		});
	});
}
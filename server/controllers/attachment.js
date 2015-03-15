var fs 		= require('fs'),
	AWS 	= require('aws-sdk');

exports.saveAttachment = function(req, res){
	console.log('controller/attachment post: ' + req.files[0].path );

	var s3 = new AWS.S3({params: {Bucket: 'wmga'}});

	fs.readFile(req.files[0].path, function (err, data) {
		s3.upload({
			ACL: 'public-read', // by default private access
			Key: req.files[0].originalname,
			Body: data
		}, function (err, data) {
			if (err) {
				console.log(err);
				res.send(500, {msg: 'upload failed', error: err})
			} else {
				console.log('S3 upload Successful');
				res.send({
					path: 'https://s3-us-west-2.amazonaws.com/wmga/' + req.files[0].name,
					fileName: req.files[0].name
				});
			}
		});
	});
};

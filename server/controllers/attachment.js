var fs 		= require('fs'),
	AWS 	= require('aws-sdk');

exports.saveAttachment = function(req, res){
	console.log('controller/attachment post: ' + req.file.path );

	var s3 = new AWS.S3({params: {Bucket: 'wmga'}});

	fs.readFile(req.file.path, function (err, data) {
		s3.upload({
			ACL: 'public-read', // by default private access
			Key: req.file.originalname,
			Body: data
		}, function (err, data) {
			if (err) {
				console.log(err);
				res.status(500).send({msg: 'upload failed', error: err})
			} else {
				console.log('S3 upload Successful');
				res.send({
					path: 'https://s3-us-west-2.amazonaws.com/wmga/' + req.file.originalname,
					fileName: req.file.originalname
				});
			}
		});
	});
};

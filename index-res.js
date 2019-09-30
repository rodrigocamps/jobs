const { S3 } = require('aws-sdk');

const putImageIntoS3 = async (image) => {
	//INSERT SOME CODE HEREA
	var s3 = new AWS.S3();
	fetch('imageURL')
};

exports.main = async (event, context, callback) => {
  	try {
		//FETCH AND SAVE IMAGE INTO S3
		var Bucket = "BucketName";
		var Key = "imageRemoteName";
		var Body = fs.readFileSync(localImage);
		return s3.putOject({Bucket,Key,Body: res.body}).promise();

	} catch (err) {
    		callback(null, `Function has failed but retry was canceled. ${err}`);
  	}
};

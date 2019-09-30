const { S3 } = require('aws-sdk');

const putImageIntoS3 = async (image) => {
	//INSERT SOME CODE HEREA
	var s3 = new AWS.S3();
	var Bucket = "BucketName";
	var Key = "gatito";
	var url = "https://camo.githubusercontent.com/8c8f0df77ffabb98139f121843ffd67ce8a7f1b7/68747470733a2f2f7777772e632d76696c6c652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f30392f436174732d363630783333352e6a7067";	
	fetch(url)
	  .then(res => {
	    return s3.putObject({Bucket, Key, Body: res.body}).promise();
  	  }).then(res => {
    		callback(null, res);
	};

exports.main = async (event, context, callback) => {
  	try {
		//FETCH AND SAVE IMAGE INTO S3
		return putImageIntoS3;

	} catch (err) {
    		callback(null, `Function has failed but retry was canceled. ${err}`);
  	}
};

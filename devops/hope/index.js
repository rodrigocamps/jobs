const { S3 } = require('aws-sdk');

const putImageIntoS3 = async (image) => {
	//INSERT SOME CODE HERE
};

exports.main = async (event, context, callback) => {
  	try {
		//FETCH AND SAVE IMAGE INTO S3
	} catch (err) {
    		callback(null, `Function has failed but retry was canceled. ${err}`);
  	}
};

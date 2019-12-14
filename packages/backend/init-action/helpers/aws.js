const AWS = require('aws-sdk');
const core = require('@actions/core');

// TODO: figure out where this should go
const BUCKET = 'gitchaos';


const uploadHistory = ({
  accessKeyId,
  secretAccessKey,
  body,
  sha: Key,
}) => {
  const s3 = new AWS.S3({
    accessKeyId,
    secretAccessKey,
  });

  return s3.upload({
    Bucket: BUCKET,
    Body: JSON.stringify(body),
    Key,
  }, (error, data) => {
    if (error) {
      core.setFailed(error.message);
    }

    return data.Location;
  });
};

module.exports = {
  uploadHistory,
};

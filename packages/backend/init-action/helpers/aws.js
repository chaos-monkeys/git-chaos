const aws = require('aws-sdk');
const core = require('@actions/core');

const uploadHistory = async ({
  accessKeyId,
  secretAccessKey,
  body,
  sha: Key,
}) => {
  const s3 = new aws.S3({
    accessKeyId,
    secretAccessKey,
  });

  await s3.upload({
    Bucket: 'test',
    Key,
    Body: JSON.stringify(body),
  }, (error, data) => {
    if (error) {
      core.setFailed(error.message);
    }

    core.debug(`File uploaded successfully at ${data.Location}`);
  });
};

module.exports = {
  uploadHistory,
};

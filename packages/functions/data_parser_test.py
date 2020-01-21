import os
import unittest
import boto3
import json
from dotenv import load_dotenv
load_dotenv(verbose=True)


class TestDownloadingS3Bucket(unittest.TestCase):

    def setUp(self):
        self.key = '0339d4513d04227453c12c816be7773a6caf44d6'
        self.bucket = 'gitchaos'
        self.s3 = boto3.client(
            's3',
            aws_access_key_id=os.getenv("ACCESS_KEY"),
            aws_secret_access_key=os.getenv("SECRET_KEY"),
        )

    def test_download(self):
        data = self.s3.get_object(Bucket=self.bucket, Key=self.key)
        json_data = json.loads(data['Body'].read().decode('utf-8'))

        assert json_data

    def test_object_transformation(self):
        data = self.s3.get_object(Bucket=self.bucket, Key=self.key)
        json_data = json.loads(data['Body'].read().decode('utf-8'))

        # TODO: Test object transformation here


if __name__ == '__main__':
    unittest.main()

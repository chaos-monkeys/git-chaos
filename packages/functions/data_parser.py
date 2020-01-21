import json
import logging
import boto3

s3 = boto3.client(
    's3',
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY,
)


def lambda_handler(event, context):

    bucket = 'test_bucket'
    key = 'data/sample_data.json'

    try:
        data = s3.get_object(Bucket=bucket, Key=key)
        json_data = data['Body'].read()

        return json_data

    except Exception as e:
        print(e)
        raise e

    return {
        'statusCode': 200,
        'body': json.dumps(json_data)
    }

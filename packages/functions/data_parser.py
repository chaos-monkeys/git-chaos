import json

# TODO: Find all authors in the Pull Request


def extract_authors(data):
    return {
        'statusCode': 200,
        'body': json.dumps('returned from extract_authors data')
    }


def lambda_handler(event, context):
    print('event', event)
    print('context', context)
    return {
        'statusCode': 200,
        'body': json.dumps('Hello world Lambda!')
    }

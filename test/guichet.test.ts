import '@aws-cdk/assert/jest';
import { App } from '@aws-cdk/core';
import { GuichetStack } from '../src/guichet';
import { ResourcePart } from '@aws-cdk/assert';


describe('Create Guichet App Resources', () => {
  describe('GuichetStack', () => {
    const app = new App({ context: { '@aws-cdk/core:newStyleStackSynthesis': '1' } });

    describe('has', () => {

      let stack = new GuichetStack(app, 'test', {
      });

      test('audio bucket', () => {
        expect(stack).toHaveResource('AWS::S3::Bucket', {
          Properties: {
            AccessControl: "PublicRead"
          },
          UpdateReplacePolicy: 'Delete',
          DeletionPolicy: 'Delete',
        }, ResourcePart.CompleteDefinition);

      });

      test('audio bucket with lambda notifier', () => {
        expect(stack).toHaveResource('Custom::S3BucketNotifications', {
          "NotificationConfiguration": {
            "LambdaFunctionConfigurations": [
              {
                "Events": [
                  "s3:ObjectCreated:*"
                ],
                "LambdaFunctionArn": {
                  "Fn::GetAtt": [
                    "Transcriber4926E100",
                    "Arn"
                  ]
                }
              }
            ]
          }
        });

      });


      test('dynamodb table', () => {
        expect(stack).toHaveResource("AWS::DynamoDB::Table", {
          AttributeDefinitions: [{ AttributeName: 'audio', AttributeType: 'S' }],
        });

      });

      test('transcriber lambda function', () => {
        expect(stack).toHaveResource('AWS::Lambda::Function', {
          Runtime: 'nodejs10.x',

        });
      });

      test('transcriber lambda function with env vars', () => {
        expect(stack).toHaveResource("AWS::Lambda::Function", {
          Environment: {
            Variables: {
              TABLE_NAME: { "Ref": "audioTranscriptions1A6D233C" },
              BUCKET_NAME: { "Ref": "AudioBucket96BEECBA" },
            }
          }
        });
      });

      test('transcriber lambda has role permissions', () => {
        expect(stack).toHaveResource("AWS::IAM::Policy", {
          PolicyDocument: {
            Statement: [
              {
                Action: [
                  "s3:GetObject*",
                  "s3:GetBucket*",
                  "s3:List*"
                ],
                Effect: 'Allow',
                Resource: [
                  {
                    "Fn::GetAtt": [
                      "AudioBucket96BEECBA",
                      "Arn"
                    ]
                  },
                  {
                    "Fn::Join": [
                      "",
                      [
                        {
                          "Fn::GetAtt": [
                            "AudioBucket96BEECBA",
                            "Arn"
                          ]
                        },
                        "/*"
                      ]
                    ]
                  }
                ],
              },
              {
                "Action": [
                  "dynamodb:BatchWriteItem",
                  "dynamodb:PutItem",
                  "dynamodb:UpdateItem",
                  "dynamodb:DeleteItem"
                ],
                "Effect": "Allow",
                "Resource": [
                  {
                    "Fn::GetAtt": [
                      "audioTranscriptions1A6D233C",
                      "Arn"
                    ]
                  },
                  {
                    "Ref": "AWS::NoValue"
                  }
                ]
              },
              {
                "Action": "transcribe:StartTranscriptionJob",
                "Effect": "Allow",
                "Resource": "*"
              }
            ],
            Version: '2012-10-17',
          },
          PolicyName: 'TranscriberServiceRoleDefaultPolicy45780372',
          Roles: [
            {
              Ref: 'TranscriberServiceRole495F268B',
            },
          ],
        });
      });


    });

  });
});


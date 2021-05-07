//import { App } from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as iam from '@aws-cdk/aws-iam';
import * as lambda from '@aws-cdk/aws-lambda';
import * as event_sources from '@aws-cdk/aws-lambda-event-sources';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class GuichetStack extends cdk.Stack {

  public readonly lambdaName: cdk.CfnOutput;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //s3 audio bucket
    const audioBucket = new s3.Bucket(this, 'AudioBucket', {
      autoDeleteObjects: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      publicReadAccess: true,
      accessControl: s3.BucketAccessControl.PUBLIC_READ,
    });

    new cdk.CfnOutput(this, 'audioBucket', { value: audioBucket.bucketName });

    //DynamoDB table for storing transcription results
    const table = new dynamodb.Table(this, 'audioTranscriptions', {
      partitionKey: { name: 'audio', type: dynamodb.AttributeType.STRING },
    });

    new cdk.CfnOutput(this, 'ddbTable', { value: table.tableName });

    //lambda layer

    const layer = new lambda.LayerVersion(this, 'pil', {
      code: lambda.Code.fromAsset("lambda/node_modules"),
      compatibleRuntimes: [lambda.Runtime.PYTHON_3_7],
      license: "Apache-2.0",
      description: "A layer to enable the PIL library in our Rekognition Lambda",
    });

    //transcriber lambda
    const transcriber = new lambda.Function(this, 'Transcriber', {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromAsset('lambda'),
      //code: lambda.Code.fromInline('exports.handler = async function (event) { return { statusCode: 200, headers: { "Content-Type": "text/plain" }, body: "hi" }; }'),
      handler: 'transcriber.handler',
      timeout: cdk.Duration.seconds(300),
      memorySize: 1024,
      environment: {
        TABLE_NAME: table.tableName,
        BUCKET_NAME: audioBucket.bucketName,
      },
      layers: [layer]
    });

    transcriber.addEventSource(new event_sources.S3EventSource(audioBucket, { events: [s3.EventType.OBJECT_CREATED] }));

    audioBucket.grantRead(transcriber);

    table.grantWriteData(transcriber);

    transcriber.addToRolePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['transcribe:StartTranscriptionJob'],
      resources: ['*'],
    }));

    this.lambdaName = new cdk.CfnOutput(this, 'TranscriberLambdaName', {
      value: transcriber.functionName,
    });
  }
}

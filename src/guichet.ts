import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';


export class GuichetStack extends cdk.Stack {

    public readonly lambdaName: cdk.CfnOutput;

    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const transcriber = new lambda.Function(this, 'Transcriber', {
            runtime: lambda.Runtime.NODEJS_10_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'transcriber.handler'
        });


        this.lambdaName = new cdk.CfnOutput(this, 'TranscriberLambdaName', {
            value: transcriber.functionName
        });
    }
}

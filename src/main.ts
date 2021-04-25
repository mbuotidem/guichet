import { App, Construct, Stack, StackProps, SecretValue } from '@aws-cdk/core';
import * as codepipeline from '@aws-cdk/aws-codepipeline';
import * as codepipeline_actions from '@aws-cdk/aws-codepipeline-actions';
import { SimpleSynthAction, CdkPipeline } from "@aws-cdk/pipelines";
import { StringParameter } from '@aws-cdk/aws-ssm';
import { GuichetPipelineStage } from './pipeline-stage';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // define resources here...

    const sourceArtifact = new codepipeline.Artifact();
    const cloudAssemblyArtifact = new codepipeline.Artifact();

    const githubOwner = StringParameter.fromStringParameterAttributes(this, 'gitOwner', {
      parameterName: 'guichet-repo-owner'
    }).stringValue;

    const githubRepo = StringParameter.fromStringParameterAttributes(this, 'gitRepo', {
      parameterName: 'guichet-repo'
    }).stringValue;

    const githubBranch = StringParameter.fromStringParameterAttributes(this, 'gitBranch', {
      parameterName: 'guichet-repo-branch'
    }).stringValue;

    const pipeline = new CdkPipeline(this, 'Pipeline', {
      crossAccountKeys: false,
      cloudAssemblyArtifact,
      // Define application source
      sourceAction: new codepipeline_actions.GitHubSourceAction({
        actionName: 'GitHub',
        output: sourceArtifact,
        oauthToken: SecretValue.secretsManager('guichet-repo-git-token', { jsonField: 'guichet-repo-git-token' }), // this token is stored in Secret Manager
        owner: githubOwner,
        repo: githubRepo,
        branch: githubBranch
      }),
      // Define build and synth commands
      synthAction: SimpleSynthAction.standardNpmSynth({
        sourceArtifact,
        cloudAssemblyArtifact,
        //This build command is to download pillow library, unzip the downloaded file and tidy up.
        //If you already have pillow library downloaded under reklayer/, please just run 'npm run build'
        //installCommand: 'npm i -g npm && npm i -g aws-cdk@1.95.2 && npm install',
        buildCommand: 'npm i -g npm && npm i -g aws-cdk@1.95.2 && npm install',
        synthCommand: 'npx cdk synth'
      })
    });

    pipeline.addApplicationStage(new GuichetPipelineStage(this, 'dev'));


  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new MyStack(app, 'my-stack-dev', { env: devEnv });
// new MyStack(app, 'my-stack-prod', { env: prodEnv });

app.synth();
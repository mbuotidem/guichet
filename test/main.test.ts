import { arrayWith, objectLike } from '@aws-cdk/assert';
import '@aws-cdk/assert/jest';
import { App } from '@aws-cdk/core';
import { GuichetPipelineStack } from '../src/main';


describe('Create Pipeline', () => {
  describe('GuichetPipeline', () => {
    const app = new App({ context: { '@aws-cdk/core:newStyleStackSynthesis': '1' } });

    describe('has', () => {

      let stack = new GuichetPipelineStack(app, 'test', {
      });

      test('Pipeline IAM roleS', () => {
        expect(stack).toCountResources('AWS::IAM::Role', 6);

      });

      test('Pipeline config', () => {
        expect(stack).toHaveResource('AWS::CodePipeline::Pipeline',
          {
            Stages: arrayWith({
              Name: 'Source',
              Actions: arrayWith(
                objectLike({
                  ActionTypeId: objectLike({}),
                  Configuration: objectLike({
                    Owner: objectLike({}),
                    Repo: objectLike({}),
                    Branch: objectLike({}),
                    OAuthToken: '{{resolve:secretsmanager:guichet-repo-git-token:SecretString:guichet-repo-git-token::}}',
                    PollForSourceChanges: false,
                  }),
                  Name: 'GitHub',
                  OutputArtifacts: arrayWith(
                    objectLike({

                    })),
                  RunOrder: 1,

                }),
              ),
            }),
          });
      });

      test('dev stage', () => {
        expect(stack).toHaveResource('AWS::CodePipeline::Pipeline',
          {
            Stages: arrayWith({
              Name: 'dev',
              Actions: arrayWith(
                objectLike({

                }),
              ),
            }),
          });
      });

      test('1 pipeline resource', () => {
        expect(stack).toCountResources('AWS::CodePipeline::Pipeline', 1);

      });

      test('CodeBuild project', () => {
        expect(stack).toHaveResource('AWS::CodeBuild::Project');

      });

    });
  });
});



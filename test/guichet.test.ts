import '@aws-cdk/assert/jest';
import { App } from '@aws-cdk/core';
import { GuichetStack } from '../src/guichet';

describe('Create Guichet App Resources', () => {
    describe('GuichetStack', () => {
        const app = new App({ context: { '@aws-cdk/core:newStyleStackSynthesis': '1' } });

        describe('has', () => {

            let stack = new GuichetStack(app, 'test', {
            });


            test('Lambda exists', () => {
                expect(stack).toHaveResource("AWS::Lambda::Function", {
                    Runtime: "nodejs10.x"

                });
            });
        });
    });
});

import { GuichetStack } from './guichet';
import { Stage, CfnOutput, Construct, StageProps } from '@aws-cdk/core';

export class GuichetPipelineStage extends Stage {
    public readonly lambdaName: CfnOutput;

    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        const service = new GuichetStack(this, 'Guichet');

        this.lambdaName = service.lambdaName;

    }
}

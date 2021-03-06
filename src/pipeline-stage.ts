import { Stage, CfnOutput, Construct, StageProps, DefaultStackSynthesizer } from '@aws-cdk/core';
import { GuichetStack } from './guichet';

export class GuichetPipelineStage extends Stage {
  public readonly lambdaName: CfnOutput;

  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new GuichetStack(this, 'Guichet', { synthesizer: new DefaultStackSynthesizer() });

    this.lambdaName = service.lambdaName;

  }
}

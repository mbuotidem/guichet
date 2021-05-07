import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { StartMedicalTranscriptionJobRequest, StartMedicalTranscriptionJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartMedicalTranscriptionJobCommandInput extends StartMedicalTranscriptionJobRequest {
}
export interface StartMedicalTranscriptionJobCommandOutput extends StartMedicalTranscriptionJobResponse, __MetadataBearer {
}
/**
 * <p>Starts a batch job to transcribe medical speech to text.</p>
 */
export declare class StartMedicalTranscriptionJobCommand extends $Command<StartMedicalTranscriptionJobCommandInput, StartMedicalTranscriptionJobCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: StartMedicalTranscriptionJobCommandInput;
    constructor(input: StartMedicalTranscriptionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMedicalTranscriptionJobCommandInput, StartMedicalTranscriptionJobCommandOutput>;
    private serialize;
    private deserialize;
}

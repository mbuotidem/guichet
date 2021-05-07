import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { StartTranscriptionJobRequest, StartTranscriptionJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartTranscriptionJobCommandInput extends StartTranscriptionJobRequest {
}
export interface StartTranscriptionJobCommandOutput extends StartTranscriptionJobResponse, __MetadataBearer {
}
/**
 * <p>Starts an asynchronous job to transcribe speech to text. </p>
 */
export declare class StartTranscriptionJobCommand extends $Command<StartTranscriptionJobCommandInput, StartTranscriptionJobCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: StartTranscriptionJobCommandInput;
    constructor(input: StartTranscriptionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartTranscriptionJobCommandInput, StartTranscriptionJobCommandOutput>;
    private serialize;
    private deserialize;
}

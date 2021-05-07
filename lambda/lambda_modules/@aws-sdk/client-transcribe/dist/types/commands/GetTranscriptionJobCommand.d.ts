import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { GetTranscriptionJobRequest, GetTranscriptionJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetTranscriptionJobCommandInput extends GetTranscriptionJobRequest {
}
export interface GetTranscriptionJobCommandOutput extends GetTranscriptionJobResponse, __MetadataBearer {
}
/**
 * <p>Returns information about a transcription job. To see the status of the job, check the
 *                 <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>,
 *             the job is finished and you can find the results at the location specified in the
 *                 <code>TranscriptFileUri</code> field. If you enable content redaction, the redacted
 *             transcript appears in <code>RedactedTranscriptFileUri</code>.</p>
 */
export declare class GetTranscriptionJobCommand extends $Command<GetTranscriptionJobCommandInput, GetTranscriptionJobCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: GetTranscriptionJobCommandInput;
    constructor(input: GetTranscriptionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTranscriptionJobCommandInput, GetTranscriptionJobCommandOutput>;
    private serialize;
    private deserialize;
}

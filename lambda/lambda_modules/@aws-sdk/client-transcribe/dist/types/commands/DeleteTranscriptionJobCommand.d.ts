import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { DeleteTranscriptionJobRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTranscriptionJobCommandInput extends DeleteTranscriptionJobRequest {
}
export interface DeleteTranscriptionJobCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a previously submitted transcription job along with any other generated
 *             results such as the transcription, models, and so on.</p>
 */
export declare class DeleteTranscriptionJobCommand extends $Command<DeleteTranscriptionJobCommandInput, DeleteTranscriptionJobCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: DeleteTranscriptionJobCommandInput;
    constructor(input: DeleteTranscriptionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTranscriptionJobCommandInput, DeleteTranscriptionJobCommandOutput>;
    private serialize;
    private deserialize;
}

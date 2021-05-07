import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListTranscriptionJobsRequest, ListTranscriptionJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTranscriptionJobsCommandInput extends ListTranscriptionJobsRequest {
}
export interface ListTranscriptionJobsCommandOutput extends ListTranscriptionJobsResponse, __MetadataBearer {
}
/**
 * <p>Lists transcription jobs with the specified status.</p>
 */
export declare class ListTranscriptionJobsCommand extends $Command<ListTranscriptionJobsCommandInput, ListTranscriptionJobsCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: ListTranscriptionJobsCommandInput;
    constructor(input: ListTranscriptionJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTranscriptionJobsCommandInput, ListTranscriptionJobsCommandOutput>;
    private serialize;
    private deserialize;
}

import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { GetVocabularyFilterRequest, GetVocabularyFilterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetVocabularyFilterCommandInput extends GetVocabularyFilterRequest {
}
export interface GetVocabularyFilterCommandOutput extends GetVocabularyFilterResponse, __MetadataBearer {
}
/**
 * <p>Returns information about a vocabulary filter.</p>
 */
export declare class GetVocabularyFilterCommand extends $Command<GetVocabularyFilterCommandInput, GetVocabularyFilterCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: GetVocabularyFilterCommandInput;
    constructor(input: GetVocabularyFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetVocabularyFilterCommandInput, GetVocabularyFilterCommandOutput>;
    private serialize;
    private deserialize;
}

import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { GetVocabularyRequest, GetVocabularyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetVocabularyCommandInput extends GetVocabularyRequest {
}
export interface GetVocabularyCommandOutput extends GetVocabularyResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a vocabulary. </p>
 */
export declare class GetVocabularyCommand extends $Command<GetVocabularyCommandInput, GetVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: GetVocabularyCommandInput;
    constructor(input: GetVocabularyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetVocabularyCommandInput, GetVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}

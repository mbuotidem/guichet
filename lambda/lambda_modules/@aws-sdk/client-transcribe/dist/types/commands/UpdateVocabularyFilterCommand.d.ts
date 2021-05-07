import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { UpdateVocabularyFilterRequest, UpdateVocabularyFilterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateVocabularyFilterCommandInput extends UpdateVocabularyFilterRequest {
}
export interface UpdateVocabularyFilterCommandOutput extends UpdateVocabularyFilterResponse, __MetadataBearer {
}
/**
 * <p>Updates a vocabulary filter with a new list of filtered words.</p>
 */
export declare class UpdateVocabularyFilterCommand extends $Command<UpdateVocabularyFilterCommandInput, UpdateVocabularyFilterCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: UpdateVocabularyFilterCommandInput;
    constructor(input: UpdateVocabularyFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVocabularyFilterCommandInput, UpdateVocabularyFilterCommandOutput>;
    private serialize;
    private deserialize;
}

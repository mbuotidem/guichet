import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { CreateVocabularyFilterRequest, CreateVocabularyFilterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateVocabularyFilterCommandInput extends CreateVocabularyFilterRequest {
}
export interface CreateVocabularyFilterCommandOutput extends CreateVocabularyFilterResponse, __MetadataBearer {
}
/**
 * <p>Creates a new vocabulary filter that you can use to filter words, such as profane
 *             words, from the output of a transcription job.</p>
 */
export declare class CreateVocabularyFilterCommand extends $Command<CreateVocabularyFilterCommandInput, CreateVocabularyFilterCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: CreateVocabularyFilterCommandInput;
    constructor(input: CreateVocabularyFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVocabularyFilterCommandInput, CreateVocabularyFilterCommandOutput>;
    private serialize;
    private deserialize;
}

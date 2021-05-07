import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { CreateVocabularyRequest, CreateVocabularyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateVocabularyCommandInput extends CreateVocabularyRequest {
}
export interface CreateVocabularyCommandOutput extends CreateVocabularyResponse, __MetadataBearer {
}
/**
 * <p>Creates a new custom vocabulary that you can use to change the way Amazon Transcribe handles
 *             transcription of an audio file. </p>
 */
export declare class CreateVocabularyCommand extends $Command<CreateVocabularyCommandInput, CreateVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: CreateVocabularyCommandInput;
    constructor(input: CreateVocabularyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVocabularyCommandInput, CreateVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}

import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { CreateMedicalVocabularyRequest, CreateMedicalVocabularyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateMedicalVocabularyCommandInput extends CreateMedicalVocabularyRequest {
}
export interface CreateMedicalVocabularyCommandOutput extends CreateMedicalVocabularyResponse, __MetadataBearer {
}
/**
 * <p>Creates a new custom vocabulary that you can use to
 *             change
 *             how Amazon Transcribe Medical transcribes your audio file.</p>
 */
export declare class CreateMedicalVocabularyCommand extends $Command<CreateMedicalVocabularyCommandInput, CreateMedicalVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: CreateMedicalVocabularyCommandInput;
    constructor(input: CreateMedicalVocabularyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMedicalVocabularyCommandInput, CreateMedicalVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}

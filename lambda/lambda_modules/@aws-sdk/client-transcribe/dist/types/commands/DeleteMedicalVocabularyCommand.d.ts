import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { DeleteMedicalVocabularyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteMedicalVocabularyCommandInput extends DeleteMedicalVocabularyRequest {
}
export interface DeleteMedicalVocabularyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a vocabulary from Amazon Transcribe Medical.</p>
 */
export declare class DeleteMedicalVocabularyCommand extends $Command<DeleteMedicalVocabularyCommandInput, DeleteMedicalVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: DeleteMedicalVocabularyCommandInput;
    constructor(input: DeleteMedicalVocabularyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMedicalVocabularyCommandInput, DeleteMedicalVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}

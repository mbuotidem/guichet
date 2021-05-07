import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { UpdateMedicalVocabularyRequest, UpdateMedicalVocabularyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMedicalVocabularyCommandInput extends UpdateMedicalVocabularyRequest {
}
export interface UpdateMedicalVocabularyCommandOutput extends UpdateMedicalVocabularyResponse, __MetadataBearer {
}
/**
 * <p>Updates a vocabulary with new values that you provide in a different text file from
 *             the one you used to create the vocabulary. The <code>UpdateMedicalVocabulary</code>
 *             operation overwrites all of the existing information with the values that you provide in
 *             the request.</p>
 */
export declare class UpdateMedicalVocabularyCommand extends $Command<UpdateMedicalVocabularyCommandInput, UpdateMedicalVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: UpdateMedicalVocabularyCommandInput;
    constructor(input: UpdateMedicalVocabularyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMedicalVocabularyCommandInput, UpdateMedicalVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}

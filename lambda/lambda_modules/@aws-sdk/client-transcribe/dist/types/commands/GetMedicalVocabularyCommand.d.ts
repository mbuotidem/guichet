import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { GetMedicalVocabularyRequest, GetMedicalVocabularyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMedicalVocabularyCommandInput extends GetMedicalVocabularyRequest {
}
export interface GetMedicalVocabularyCommandOutput extends GetMedicalVocabularyResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about a medical vocabulary.</p>
 */
export declare class GetMedicalVocabularyCommand extends $Command<GetMedicalVocabularyCommandInput, GetMedicalVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: GetMedicalVocabularyCommandInput;
    constructor(input: GetMedicalVocabularyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMedicalVocabularyCommandInput, GetMedicalVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}

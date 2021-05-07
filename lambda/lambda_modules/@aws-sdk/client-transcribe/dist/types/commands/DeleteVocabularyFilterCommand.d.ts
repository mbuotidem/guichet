import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { DeleteVocabularyFilterRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVocabularyFilterCommandInput extends DeleteVocabularyFilterRequest {
}
export interface DeleteVocabularyFilterCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes a vocabulary filter.</p>
 */
export declare class DeleteVocabularyFilterCommand extends $Command<DeleteVocabularyFilterCommandInput, DeleteVocabularyFilterCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: DeleteVocabularyFilterCommandInput;
    constructor(input: DeleteVocabularyFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVocabularyFilterCommandInput, DeleteVocabularyFilterCommandOutput>;
    private serialize;
    private deserialize;
}

import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { DeleteVocabularyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVocabularyCommandInput extends DeleteVocabularyRequest {
}
export interface DeleteVocabularyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a vocabulary from Amazon Transcribe. </p>
 */
export declare class DeleteVocabularyCommand extends $Command<DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: DeleteVocabularyCommandInput;
    constructor(input: DeleteVocabularyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}

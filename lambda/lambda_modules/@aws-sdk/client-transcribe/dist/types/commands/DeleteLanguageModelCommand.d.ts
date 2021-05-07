import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { DeleteLanguageModelRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLanguageModelCommandInput extends DeleteLanguageModelRequest {
}
export interface DeleteLanguageModelCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a custom language model using its name.</p>
 */
export declare class DeleteLanguageModelCommand extends $Command<DeleteLanguageModelCommandInput, DeleteLanguageModelCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: DeleteLanguageModelCommandInput;
    constructor(input: DeleteLanguageModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLanguageModelCommandInput, DeleteLanguageModelCommandOutput>;
    private serialize;
    private deserialize;
}

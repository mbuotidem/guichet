import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListLanguageModelsRequest, ListLanguageModelsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLanguageModelsCommandInput extends ListLanguageModelsRequest {
}
export interface ListLanguageModelsCommandOutput extends ListLanguageModelsResponse, __MetadataBearer {
}
/**
 * <p>Provides more information about the custom language models you've created. You can use
 *             the information in this list to find a specific custom language model. You can then use
 *             the  operation to get more information about
 *             it.</p>
 */
export declare class ListLanguageModelsCommand extends $Command<ListLanguageModelsCommandInput, ListLanguageModelsCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: ListLanguageModelsCommandInput;
    constructor(input: ListLanguageModelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLanguageModelsCommandInput, ListLanguageModelsCommandOutput>;
    private serialize;
    private deserialize;
}

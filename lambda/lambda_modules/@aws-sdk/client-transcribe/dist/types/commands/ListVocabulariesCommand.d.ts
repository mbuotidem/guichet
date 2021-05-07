import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListVocabulariesRequest, ListVocabulariesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListVocabulariesCommandInput extends ListVocabulariesRequest {
}
export interface ListVocabulariesCommandOutput extends ListVocabulariesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of vocabularies that match the specified criteria. If no criteria are
 *             specified, returns the entire list of vocabularies.</p>
 */
export declare class ListVocabulariesCommand extends $Command<ListVocabulariesCommandInput, ListVocabulariesCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: ListVocabulariesCommandInput;
    constructor(input: ListVocabulariesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVocabulariesCommandInput, ListVocabulariesCommandOutput>;
    private serialize;
    private deserialize;
}

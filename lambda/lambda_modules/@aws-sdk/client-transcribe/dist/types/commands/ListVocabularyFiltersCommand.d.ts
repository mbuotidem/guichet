import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListVocabularyFiltersRequest, ListVocabularyFiltersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListVocabularyFiltersCommandInput extends ListVocabularyFiltersRequest {
}
export interface ListVocabularyFiltersCommandOutput extends ListVocabularyFiltersResponse, __MetadataBearer {
}
/**
 * <p>Gets information about vocabulary filters.</p>
 */
export declare class ListVocabularyFiltersCommand extends $Command<ListVocabularyFiltersCommandInput, ListVocabularyFiltersCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: ListVocabularyFiltersCommandInput;
    constructor(input: ListVocabularyFiltersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListVocabularyFiltersCommandInput, ListVocabularyFiltersCommandOutput>;
    private serialize;
    private deserialize;
}

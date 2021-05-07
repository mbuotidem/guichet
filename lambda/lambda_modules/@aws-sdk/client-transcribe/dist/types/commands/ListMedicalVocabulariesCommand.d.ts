import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { ListMedicalVocabulariesRequest, ListMedicalVocabulariesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMedicalVocabulariesCommandInput extends ListMedicalVocabulariesRequest {
}
export interface ListMedicalVocabulariesCommandOutput extends ListMedicalVocabulariesResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of vocabularies that match the specified criteria. If you don't enter a
 *             value in any of the request parameters, returns the entire list of vocabularies.</p>
 */
export declare class ListMedicalVocabulariesCommand extends $Command<ListMedicalVocabulariesCommandInput, ListMedicalVocabulariesCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: ListMedicalVocabulariesCommandInput;
    constructor(input: ListMedicalVocabulariesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMedicalVocabulariesCommandInput, ListMedicalVocabulariesCommandOutput>;
    private serialize;
    private deserialize;
}

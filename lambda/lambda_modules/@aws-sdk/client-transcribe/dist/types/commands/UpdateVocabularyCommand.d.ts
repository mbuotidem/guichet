import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { UpdateVocabularyRequest, UpdateVocabularyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateVocabularyCommandInput extends UpdateVocabularyRequest {
}
export interface UpdateVocabularyCommandOutput extends UpdateVocabularyResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing vocabulary with new values. The <code>UpdateVocabulary</code>
 *             operation overwrites all of the existing information with the values that you provide in
 *             the request. </p>
 */
export declare class UpdateVocabularyCommand extends $Command<UpdateVocabularyCommandInput, UpdateVocabularyCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: UpdateVocabularyCommandInput;
    constructor(input: UpdateVocabularyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVocabularyCommandInput, UpdateVocabularyCommandOutput>;
    private serialize;
    private deserialize;
}

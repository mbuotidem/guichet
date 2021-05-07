import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { CreateLanguageModelRequest, CreateLanguageModelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLanguageModelCommandInput extends CreateLanguageModelRequest {
}
export interface CreateLanguageModelCommandOutput extends CreateLanguageModelResponse, __MetadataBearer {
}
/**
 * <p>Creates a new custom language model. Use Amazon S3 prefixes to provide the location of your
 *             input files. The time it takes to create your model depends on the size of your training
 *             data.</p>
 */
export declare class CreateLanguageModelCommand extends $Command<CreateLanguageModelCommandInput, CreateLanguageModelCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: CreateLanguageModelCommandInput;
    constructor(input: CreateLanguageModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLanguageModelCommandInput, CreateLanguageModelCommandOutput>;
    private serialize;
    private deserialize;
}

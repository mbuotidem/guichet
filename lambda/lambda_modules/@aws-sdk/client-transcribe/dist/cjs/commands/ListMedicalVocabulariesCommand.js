"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMedicalVocabulariesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of vocabularies that match the specified criteria. If you don't enter a
 *             value in any of the request parameters, returns the entire list of vocabularies.</p>
 */
class ListMedicalVocabulariesCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "TranscribeClient";
        const commandName = "ListMedicalVocabulariesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListMedicalVocabulariesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListMedicalVocabulariesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListMedicalVocabulariesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListMedicalVocabulariesCommand(output, context);
    }
}
exports.ListMedicalVocabulariesCommand = ListMedicalVocabulariesCommand;
//# sourceMappingURL=ListMedicalVocabulariesCommand.js.map
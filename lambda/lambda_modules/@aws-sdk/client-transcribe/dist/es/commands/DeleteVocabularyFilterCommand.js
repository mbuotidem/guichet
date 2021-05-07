import { __extends } from "tslib";
import { DeleteVocabularyFilterRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteVocabularyFilterCommand, serializeAws_json1_1DeleteVocabularyFilterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a vocabulary filter.</p>
 */
var DeleteVocabularyFilterCommand = /** @class */ (function (_super) {
    __extends(DeleteVocabularyFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVocabularyFilterCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DeleteVocabularyFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "DeleteVocabularyFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVocabularyFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVocabularyFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteVocabularyFilterCommand(input, context);
    };
    DeleteVocabularyFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteVocabularyFilterCommand(output, context);
    };
    return DeleteVocabularyFilterCommand;
}($Command));
export { DeleteVocabularyFilterCommand };
//# sourceMappingURL=DeleteVocabularyFilterCommand.js.map
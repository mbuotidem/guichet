import { __extends } from "tslib";
import { UpdateVocabularyFilterRequest, UpdateVocabularyFilterResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateVocabularyFilterCommand, serializeAws_json1_1UpdateVocabularyFilterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a vocabulary filter with a new list of filtered words.</p>
 */
var UpdateVocabularyFilterCommand = /** @class */ (function (_super) {
    __extends(UpdateVocabularyFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateVocabularyFilterCommand(input) {
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
    UpdateVocabularyFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "UpdateVocabularyFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateVocabularyFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateVocabularyFilterResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateVocabularyFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateVocabularyFilterCommand(input, context);
    };
    UpdateVocabularyFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateVocabularyFilterCommand(output, context);
    };
    return UpdateVocabularyFilterCommand;
}($Command));
export { UpdateVocabularyFilterCommand };
//# sourceMappingURL=UpdateVocabularyFilterCommand.js.map
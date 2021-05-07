import { __extends } from "tslib";
import { CreateMedicalVocabularyRequest, CreateMedicalVocabularyResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateMedicalVocabularyCommand, serializeAws_json1_1CreateMedicalVocabularyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new custom vocabulary that you can use to
 *             change
 *             how Amazon Transcribe Medical transcribes your audio file.</p>
 */
var CreateMedicalVocabularyCommand = /** @class */ (function (_super) {
    __extends(CreateMedicalVocabularyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMedicalVocabularyCommand(input) {
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
    CreateMedicalVocabularyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "CreateMedicalVocabularyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMedicalVocabularyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMedicalVocabularyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMedicalVocabularyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateMedicalVocabularyCommand(input, context);
    };
    CreateMedicalVocabularyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateMedicalVocabularyCommand(output, context);
    };
    return CreateMedicalVocabularyCommand;
}($Command));
export { CreateMedicalVocabularyCommand };
//# sourceMappingURL=CreateMedicalVocabularyCommand.js.map
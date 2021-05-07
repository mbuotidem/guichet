import { __extends } from "tslib";
import { ListTranscriptionJobsRequest, ListTranscriptionJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListTranscriptionJobsCommand, serializeAws_json1_1ListTranscriptionJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists transcription jobs with the specified status.</p>
 */
var ListTranscriptionJobsCommand = /** @class */ (function (_super) {
    __extends(ListTranscriptionJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTranscriptionJobsCommand(input) {
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
    ListTranscriptionJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TranscribeClient";
        var commandName = "ListTranscriptionJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTranscriptionJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTranscriptionJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTranscriptionJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTranscriptionJobsCommand(input, context);
    };
    ListTranscriptionJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTranscriptionJobsCommand(output, context);
    };
    return ListTranscriptionJobsCommand;
}($Command));
export { ListTranscriptionJobsCommand };
//# sourceMappingURL=ListTranscriptionJobsCommand.js.map
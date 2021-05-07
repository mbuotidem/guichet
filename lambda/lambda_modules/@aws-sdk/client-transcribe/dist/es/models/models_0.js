import { __assign } from "tslib";
export var BadRequestException;
(function (BadRequestException) {
    BadRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BadRequestException || (BadRequestException = {}));
export var BaseModelName;
(function (BaseModelName) {
    BaseModelName["NARROW_BAND"] = "NarrowBand";
    BaseModelName["WIDE_BAND"] = "WideBand";
})(BaseModelName || (BaseModelName = {}));
export var CLMLanguageCode;
(function (CLMLanguageCode) {
    CLMLanguageCode["EN_AU"] = "en-AU";
    CLMLanguageCode["EN_GB"] = "en-GB";
    CLMLanguageCode["EN_US"] = "en-US";
    CLMLanguageCode["ES_US"] = "es-US";
    CLMLanguageCode["HI_IN"] = "hi-IN";
})(CLMLanguageCode || (CLMLanguageCode = {}));
export var ConflictException;
(function (ConflictException) {
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var RedactionOutput;
(function (RedactionOutput) {
    RedactionOutput["REDACTED"] = "redacted";
    RedactionOutput["REDACTED_AND_UNREDACTED"] = "redacted_and_unredacted";
})(RedactionOutput || (RedactionOutput = {}));
export var RedactionType;
(function (RedactionType) {
    RedactionType["PII"] = "PII";
})(RedactionType || (RedactionType = {}));
export var ContentRedaction;
(function (ContentRedaction) {
    ContentRedaction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContentRedaction || (ContentRedaction = {}));
export var InputDataConfig;
(function (InputDataConfig) {
    InputDataConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDataConfig || (InputDataConfig = {}));
export var CreateLanguageModelRequest;
(function (CreateLanguageModelRequest) {
    CreateLanguageModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLanguageModelRequest || (CreateLanguageModelRequest = {}));
export var ModelStatus;
(function (ModelStatus) {
    ModelStatus["COMPLETED"] = "COMPLETED";
    ModelStatus["FAILED"] = "FAILED";
    ModelStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(ModelStatus || (ModelStatus = {}));
export var CreateLanguageModelResponse;
(function (CreateLanguageModelResponse) {
    CreateLanguageModelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLanguageModelResponse || (CreateLanguageModelResponse = {}));
export var InternalFailureException;
(function (InternalFailureException) {
    InternalFailureException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalFailureException || (InternalFailureException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var LanguageCode;
(function (LanguageCode) {
    LanguageCode["AF_ZA"] = "af-ZA";
    LanguageCode["AR_AE"] = "ar-AE";
    LanguageCode["AR_SA"] = "ar-SA";
    LanguageCode["CY_GB"] = "cy-GB";
    LanguageCode["DA_DK"] = "da-DK";
    LanguageCode["DE_CH"] = "de-CH";
    LanguageCode["DE_DE"] = "de-DE";
    LanguageCode["EN_AB"] = "en-AB";
    LanguageCode["EN_AU"] = "en-AU";
    LanguageCode["EN_GB"] = "en-GB";
    LanguageCode["EN_IE"] = "en-IE";
    LanguageCode["EN_IN"] = "en-IN";
    LanguageCode["EN_US"] = "en-US";
    LanguageCode["EN_WL"] = "en-WL";
    LanguageCode["ES_ES"] = "es-ES";
    LanguageCode["ES_US"] = "es-US";
    LanguageCode["FA_IR"] = "fa-IR";
    LanguageCode["FR_CA"] = "fr-CA";
    LanguageCode["FR_FR"] = "fr-FR";
    LanguageCode["GA_IE"] = "ga-IE";
    LanguageCode["GD_GB"] = "gd-GB";
    LanguageCode["HE_IL"] = "he-IL";
    LanguageCode["HI_IN"] = "hi-IN";
    LanguageCode["ID_ID"] = "id-ID";
    LanguageCode["IT_IT"] = "it-IT";
    LanguageCode["JA_JP"] = "ja-JP";
    LanguageCode["KO_KR"] = "ko-KR";
    LanguageCode["MS_MY"] = "ms-MY";
    LanguageCode["NL_NL"] = "nl-NL";
    LanguageCode["PT_BR"] = "pt-BR";
    LanguageCode["PT_PT"] = "pt-PT";
    LanguageCode["RU_RU"] = "ru-RU";
    LanguageCode["TA_IN"] = "ta-IN";
    LanguageCode["TE_IN"] = "te-IN";
    LanguageCode["TR_TR"] = "tr-TR";
    LanguageCode["ZH_CN"] = "zh-CN";
})(LanguageCode || (LanguageCode = {}));
export var CreateMedicalVocabularyRequest;
(function (CreateMedicalVocabularyRequest) {
    CreateMedicalVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMedicalVocabularyRequest || (CreateMedicalVocabularyRequest = {}));
export var VocabularyState;
(function (VocabularyState) {
    VocabularyState["FAILED"] = "FAILED";
    VocabularyState["PENDING"] = "PENDING";
    VocabularyState["READY"] = "READY";
})(VocabularyState || (VocabularyState = {}));
export var CreateMedicalVocabularyResponse;
(function (CreateMedicalVocabularyResponse) {
    CreateMedicalVocabularyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMedicalVocabularyResponse || (CreateMedicalVocabularyResponse = {}));
export var CreateVocabularyRequest;
(function (CreateVocabularyRequest) {
    CreateVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVocabularyRequest || (CreateVocabularyRequest = {}));
export var CreateVocabularyResponse;
(function (CreateVocabularyResponse) {
    CreateVocabularyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVocabularyResponse || (CreateVocabularyResponse = {}));
export var CreateVocabularyFilterRequest;
(function (CreateVocabularyFilterRequest) {
    CreateVocabularyFilterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVocabularyFilterRequest || (CreateVocabularyFilterRequest = {}));
export var CreateVocabularyFilterResponse;
(function (CreateVocabularyFilterResponse) {
    CreateVocabularyFilterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateVocabularyFilterResponse || (CreateVocabularyFilterResponse = {}));
export var DeleteLanguageModelRequest;
(function (DeleteLanguageModelRequest) {
    DeleteLanguageModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLanguageModelRequest || (DeleteLanguageModelRequest = {}));
export var DeleteMedicalTranscriptionJobRequest;
(function (DeleteMedicalTranscriptionJobRequest) {
    DeleteMedicalTranscriptionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMedicalTranscriptionJobRequest || (DeleteMedicalTranscriptionJobRequest = {}));
export var DeleteMedicalVocabularyRequest;
(function (DeleteMedicalVocabularyRequest) {
    DeleteMedicalVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMedicalVocabularyRequest || (DeleteMedicalVocabularyRequest = {}));
export var NotFoundException;
(function (NotFoundException) {
    NotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotFoundException || (NotFoundException = {}));
export var DeleteTranscriptionJobRequest;
(function (DeleteTranscriptionJobRequest) {
    DeleteTranscriptionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteTranscriptionJobRequest || (DeleteTranscriptionJobRequest = {}));
export var DeleteVocabularyRequest;
(function (DeleteVocabularyRequest) {
    DeleteVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVocabularyRequest || (DeleteVocabularyRequest = {}));
export var DeleteVocabularyFilterRequest;
(function (DeleteVocabularyFilterRequest) {
    DeleteVocabularyFilterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteVocabularyFilterRequest || (DeleteVocabularyFilterRequest = {}));
export var DescribeLanguageModelRequest;
(function (DescribeLanguageModelRequest) {
    DescribeLanguageModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLanguageModelRequest || (DescribeLanguageModelRequest = {}));
export var LanguageModel;
(function (LanguageModel) {
    LanguageModel.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LanguageModel || (LanguageModel = {}));
export var DescribeLanguageModelResponse;
(function (DescribeLanguageModelResponse) {
    DescribeLanguageModelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeLanguageModelResponse || (DescribeLanguageModelResponse = {}));
export var GetMedicalTranscriptionJobRequest;
(function (GetMedicalTranscriptionJobRequest) {
    GetMedicalTranscriptionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMedicalTranscriptionJobRequest || (GetMedicalTranscriptionJobRequest = {}));
export var Media;
(function (Media) {
    Media.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Media || (Media = {}));
export var MediaFormat;
(function (MediaFormat) {
    MediaFormat["AMR"] = "amr";
    MediaFormat["FLAC"] = "flac";
    MediaFormat["MP3"] = "mp3";
    MediaFormat["MP4"] = "mp4";
    MediaFormat["OGG"] = "ogg";
    MediaFormat["WAV"] = "wav";
    MediaFormat["WEBM"] = "webm";
})(MediaFormat || (MediaFormat = {}));
export var MedicalTranscriptionSetting;
(function (MedicalTranscriptionSetting) {
    MedicalTranscriptionSetting.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MedicalTranscriptionSetting || (MedicalTranscriptionSetting = {}));
export var Specialty;
(function (Specialty) {
    Specialty["PRIMARYCARE"] = "PRIMARYCARE";
})(Specialty || (Specialty = {}));
export var MedicalTranscript;
(function (MedicalTranscript) {
    MedicalTranscript.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MedicalTranscript || (MedicalTranscript = {}));
export var TranscriptionJobStatus;
(function (TranscriptionJobStatus) {
    TranscriptionJobStatus["COMPLETED"] = "COMPLETED";
    TranscriptionJobStatus["FAILED"] = "FAILED";
    TranscriptionJobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TranscriptionJobStatus["QUEUED"] = "QUEUED";
})(TranscriptionJobStatus || (TranscriptionJobStatus = {}));
export var Type;
(function (Type) {
    Type["CONVERSATION"] = "CONVERSATION";
    Type["DICTATION"] = "DICTATION";
})(Type || (Type = {}));
export var MedicalTranscriptionJob;
(function (MedicalTranscriptionJob) {
    MedicalTranscriptionJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MedicalTranscriptionJob || (MedicalTranscriptionJob = {}));
export var GetMedicalTranscriptionJobResponse;
(function (GetMedicalTranscriptionJobResponse) {
    GetMedicalTranscriptionJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMedicalTranscriptionJobResponse || (GetMedicalTranscriptionJobResponse = {}));
export var GetMedicalVocabularyRequest;
(function (GetMedicalVocabularyRequest) {
    GetMedicalVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMedicalVocabularyRequest || (GetMedicalVocabularyRequest = {}));
export var GetMedicalVocabularyResponse;
(function (GetMedicalVocabularyResponse) {
    GetMedicalVocabularyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMedicalVocabularyResponse || (GetMedicalVocabularyResponse = {}));
export var GetTranscriptionJobRequest;
(function (GetTranscriptionJobRequest) {
    GetTranscriptionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTranscriptionJobRequest || (GetTranscriptionJobRequest = {}));
export var JobExecutionSettings;
(function (JobExecutionSettings) {
    JobExecutionSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobExecutionSettings || (JobExecutionSettings = {}));
export var ModelSettings;
(function (ModelSettings) {
    ModelSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelSettings || (ModelSettings = {}));
export var VocabularyFilterMethod;
(function (VocabularyFilterMethod) {
    VocabularyFilterMethod["MASK"] = "mask";
    VocabularyFilterMethod["REMOVE"] = "remove";
    VocabularyFilterMethod["TAG"] = "tag";
})(VocabularyFilterMethod || (VocabularyFilterMethod = {}));
export var Settings;
(function (Settings) {
    Settings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Settings || (Settings = {}));
export var Transcript;
(function (Transcript) {
    Transcript.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Transcript || (Transcript = {}));
export var TranscriptionJob;
(function (TranscriptionJob) {
    TranscriptionJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TranscriptionJob || (TranscriptionJob = {}));
export var GetTranscriptionJobResponse;
(function (GetTranscriptionJobResponse) {
    GetTranscriptionJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTranscriptionJobResponse || (GetTranscriptionJobResponse = {}));
export var GetVocabularyRequest;
(function (GetVocabularyRequest) {
    GetVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetVocabularyRequest || (GetVocabularyRequest = {}));
export var GetVocabularyResponse;
(function (GetVocabularyResponse) {
    GetVocabularyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetVocabularyResponse || (GetVocabularyResponse = {}));
export var GetVocabularyFilterRequest;
(function (GetVocabularyFilterRequest) {
    GetVocabularyFilterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetVocabularyFilterRequest || (GetVocabularyFilterRequest = {}));
export var GetVocabularyFilterResponse;
(function (GetVocabularyFilterResponse) {
    GetVocabularyFilterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetVocabularyFilterResponse || (GetVocabularyFilterResponse = {}));
export var ListLanguageModelsRequest;
(function (ListLanguageModelsRequest) {
    ListLanguageModelsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLanguageModelsRequest || (ListLanguageModelsRequest = {}));
export var ListLanguageModelsResponse;
(function (ListLanguageModelsResponse) {
    ListLanguageModelsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLanguageModelsResponse || (ListLanguageModelsResponse = {}));
export var ListMedicalTranscriptionJobsRequest;
(function (ListMedicalTranscriptionJobsRequest) {
    ListMedicalTranscriptionJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMedicalTranscriptionJobsRequest || (ListMedicalTranscriptionJobsRequest = {}));
export var OutputLocationType;
(function (OutputLocationType) {
    OutputLocationType["CUSTOMER_BUCKET"] = "CUSTOMER_BUCKET";
    OutputLocationType["SERVICE_BUCKET"] = "SERVICE_BUCKET";
})(OutputLocationType || (OutputLocationType = {}));
export var MedicalTranscriptionJobSummary;
(function (MedicalTranscriptionJobSummary) {
    MedicalTranscriptionJobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MedicalTranscriptionJobSummary || (MedicalTranscriptionJobSummary = {}));
export var ListMedicalTranscriptionJobsResponse;
(function (ListMedicalTranscriptionJobsResponse) {
    ListMedicalTranscriptionJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMedicalTranscriptionJobsResponse || (ListMedicalTranscriptionJobsResponse = {}));
export var ListMedicalVocabulariesRequest;
(function (ListMedicalVocabulariesRequest) {
    ListMedicalVocabulariesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMedicalVocabulariesRequest || (ListMedicalVocabulariesRequest = {}));
export var VocabularyInfo;
(function (VocabularyInfo) {
    VocabularyInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VocabularyInfo || (VocabularyInfo = {}));
export var ListMedicalVocabulariesResponse;
(function (ListMedicalVocabulariesResponse) {
    ListMedicalVocabulariesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMedicalVocabulariesResponse || (ListMedicalVocabulariesResponse = {}));
export var ListTranscriptionJobsRequest;
(function (ListTranscriptionJobsRequest) {
    ListTranscriptionJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTranscriptionJobsRequest || (ListTranscriptionJobsRequest = {}));
export var TranscriptionJobSummary;
(function (TranscriptionJobSummary) {
    TranscriptionJobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TranscriptionJobSummary || (TranscriptionJobSummary = {}));
export var ListTranscriptionJobsResponse;
(function (ListTranscriptionJobsResponse) {
    ListTranscriptionJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTranscriptionJobsResponse || (ListTranscriptionJobsResponse = {}));
export var ListVocabulariesRequest;
(function (ListVocabulariesRequest) {
    ListVocabulariesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVocabulariesRequest || (ListVocabulariesRequest = {}));
export var ListVocabulariesResponse;
(function (ListVocabulariesResponse) {
    ListVocabulariesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVocabulariesResponse || (ListVocabulariesResponse = {}));
export var ListVocabularyFiltersRequest;
(function (ListVocabularyFiltersRequest) {
    ListVocabularyFiltersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVocabularyFiltersRequest || (ListVocabularyFiltersRequest = {}));
export var VocabularyFilterInfo;
(function (VocabularyFilterInfo) {
    VocabularyFilterInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VocabularyFilterInfo || (VocabularyFilterInfo = {}));
export var ListVocabularyFiltersResponse;
(function (ListVocabularyFiltersResponse) {
    ListVocabularyFiltersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListVocabularyFiltersResponse || (ListVocabularyFiltersResponse = {}));
export var StartMedicalTranscriptionJobRequest;
(function (StartMedicalTranscriptionJobRequest) {
    StartMedicalTranscriptionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartMedicalTranscriptionJobRequest || (StartMedicalTranscriptionJobRequest = {}));
export var StartMedicalTranscriptionJobResponse;
(function (StartMedicalTranscriptionJobResponse) {
    StartMedicalTranscriptionJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartMedicalTranscriptionJobResponse || (StartMedicalTranscriptionJobResponse = {}));
export var StartTranscriptionJobRequest;
(function (StartTranscriptionJobRequest) {
    StartTranscriptionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartTranscriptionJobRequest || (StartTranscriptionJobRequest = {}));
export var StartTranscriptionJobResponse;
(function (StartTranscriptionJobResponse) {
    StartTranscriptionJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartTranscriptionJobResponse || (StartTranscriptionJobResponse = {}));
export var UpdateMedicalVocabularyRequest;
(function (UpdateMedicalVocabularyRequest) {
    UpdateMedicalVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMedicalVocabularyRequest || (UpdateMedicalVocabularyRequest = {}));
export var UpdateMedicalVocabularyResponse;
(function (UpdateMedicalVocabularyResponse) {
    UpdateMedicalVocabularyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMedicalVocabularyResponse || (UpdateMedicalVocabularyResponse = {}));
export var UpdateVocabularyRequest;
(function (UpdateVocabularyRequest) {
    UpdateVocabularyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateVocabularyRequest || (UpdateVocabularyRequest = {}));
export var UpdateVocabularyResponse;
(function (UpdateVocabularyResponse) {
    UpdateVocabularyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateVocabularyResponse || (UpdateVocabularyResponse = {}));
export var UpdateVocabularyFilterRequest;
(function (UpdateVocabularyFilterRequest) {
    UpdateVocabularyFilterRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateVocabularyFilterRequest || (UpdateVocabularyFilterRequest = {}));
export var UpdateVocabularyFilterResponse;
(function (UpdateVocabularyFilterResponse) {
    UpdateVocabularyFilterResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateVocabularyFilterResponse || (UpdateVocabularyFilterResponse = {}));
//# sourceMappingURL=models_0.js.map
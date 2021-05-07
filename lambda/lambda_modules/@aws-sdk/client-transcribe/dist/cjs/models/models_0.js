"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranscriptionJob = exports.Transcript = exports.Settings = exports.VocabularyFilterMethod = exports.ModelSettings = exports.JobExecutionSettings = exports.GetTranscriptionJobRequest = exports.GetMedicalVocabularyResponse = exports.GetMedicalVocabularyRequest = exports.GetMedicalTranscriptionJobResponse = exports.MedicalTranscriptionJob = exports.Type = exports.TranscriptionJobStatus = exports.MedicalTranscript = exports.Specialty = exports.MedicalTranscriptionSetting = exports.MediaFormat = exports.Media = exports.GetMedicalTranscriptionJobRequest = exports.DescribeLanguageModelResponse = exports.LanguageModel = exports.DescribeLanguageModelRequest = exports.DeleteVocabularyFilterRequest = exports.DeleteVocabularyRequest = exports.DeleteTranscriptionJobRequest = exports.NotFoundException = exports.DeleteMedicalVocabularyRequest = exports.DeleteMedicalTranscriptionJobRequest = exports.DeleteLanguageModelRequest = exports.CreateVocabularyFilterResponse = exports.CreateVocabularyFilterRequest = exports.CreateVocabularyResponse = exports.CreateVocabularyRequest = exports.CreateMedicalVocabularyResponse = exports.VocabularyState = exports.CreateMedicalVocabularyRequest = exports.LanguageCode = exports.LimitExceededException = exports.InternalFailureException = exports.CreateLanguageModelResponse = exports.ModelStatus = exports.CreateLanguageModelRequest = exports.InputDataConfig = exports.ContentRedaction = exports.RedactionType = exports.RedactionOutput = exports.ConflictException = exports.CLMLanguageCode = exports.BaseModelName = exports.BadRequestException = void 0;
exports.UpdateVocabularyFilterResponse = exports.UpdateVocabularyFilterRequest = exports.UpdateVocabularyResponse = exports.UpdateVocabularyRequest = exports.UpdateMedicalVocabularyResponse = exports.UpdateMedicalVocabularyRequest = exports.StartTranscriptionJobResponse = exports.StartTranscriptionJobRequest = exports.StartMedicalTranscriptionJobResponse = exports.StartMedicalTranscriptionJobRequest = exports.ListVocabularyFiltersResponse = exports.VocabularyFilterInfo = exports.ListVocabularyFiltersRequest = exports.ListVocabulariesResponse = exports.ListVocabulariesRequest = exports.ListTranscriptionJobsResponse = exports.TranscriptionJobSummary = exports.ListTranscriptionJobsRequest = exports.ListMedicalVocabulariesResponse = exports.VocabularyInfo = exports.ListMedicalVocabulariesRequest = exports.ListMedicalTranscriptionJobsResponse = exports.MedicalTranscriptionJobSummary = exports.OutputLocationType = exports.ListMedicalTranscriptionJobsRequest = exports.ListLanguageModelsResponse = exports.ListLanguageModelsRequest = exports.GetVocabularyFilterResponse = exports.GetVocabularyFilterRequest = exports.GetVocabularyResponse = exports.GetVocabularyRequest = exports.GetTranscriptionJobResponse = void 0;
var BadRequestException;
(function (BadRequestException) {
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var BaseModelName;
(function (BaseModelName) {
    BaseModelName["NARROW_BAND"] = "NarrowBand";
    BaseModelName["WIDE_BAND"] = "WideBand";
})(BaseModelName = exports.BaseModelName || (exports.BaseModelName = {}));
var CLMLanguageCode;
(function (CLMLanguageCode) {
    CLMLanguageCode["EN_AU"] = "en-AU";
    CLMLanguageCode["EN_GB"] = "en-GB";
    CLMLanguageCode["EN_US"] = "en-US";
    CLMLanguageCode["ES_US"] = "es-US";
    CLMLanguageCode["HI_IN"] = "hi-IN";
})(CLMLanguageCode = exports.CLMLanguageCode || (exports.CLMLanguageCode = {}));
var ConflictException;
(function (ConflictException) {
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var RedactionOutput;
(function (RedactionOutput) {
    RedactionOutput["REDACTED"] = "redacted";
    RedactionOutput["REDACTED_AND_UNREDACTED"] = "redacted_and_unredacted";
})(RedactionOutput = exports.RedactionOutput || (exports.RedactionOutput = {}));
var RedactionType;
(function (RedactionType) {
    RedactionType["PII"] = "PII";
})(RedactionType = exports.RedactionType || (exports.RedactionType = {}));
var ContentRedaction;
(function (ContentRedaction) {
    ContentRedaction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContentRedaction = exports.ContentRedaction || (exports.ContentRedaction = {}));
var InputDataConfig;
(function (InputDataConfig) {
    InputDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDataConfig = exports.InputDataConfig || (exports.InputDataConfig = {}));
var CreateLanguageModelRequest;
(function (CreateLanguageModelRequest) {
    CreateLanguageModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLanguageModelRequest = exports.CreateLanguageModelRequest || (exports.CreateLanguageModelRequest = {}));
var ModelStatus;
(function (ModelStatus) {
    ModelStatus["COMPLETED"] = "COMPLETED";
    ModelStatus["FAILED"] = "FAILED";
    ModelStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(ModelStatus = exports.ModelStatus || (exports.ModelStatus = {}));
var CreateLanguageModelResponse;
(function (CreateLanguageModelResponse) {
    CreateLanguageModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLanguageModelResponse = exports.CreateLanguageModelResponse || (exports.CreateLanguageModelResponse = {}));
var InternalFailureException;
(function (InternalFailureException) {
    InternalFailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalFailureException = exports.InternalFailureException || (exports.InternalFailureException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var LanguageCode;
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
})(LanguageCode = exports.LanguageCode || (exports.LanguageCode = {}));
var CreateMedicalVocabularyRequest;
(function (CreateMedicalVocabularyRequest) {
    CreateMedicalVocabularyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMedicalVocabularyRequest = exports.CreateMedicalVocabularyRequest || (exports.CreateMedicalVocabularyRequest = {}));
var VocabularyState;
(function (VocabularyState) {
    VocabularyState["FAILED"] = "FAILED";
    VocabularyState["PENDING"] = "PENDING";
    VocabularyState["READY"] = "READY";
})(VocabularyState = exports.VocabularyState || (exports.VocabularyState = {}));
var CreateMedicalVocabularyResponse;
(function (CreateMedicalVocabularyResponse) {
    CreateMedicalVocabularyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateMedicalVocabularyResponse = exports.CreateMedicalVocabularyResponse || (exports.CreateMedicalVocabularyResponse = {}));
var CreateVocabularyRequest;
(function (CreateVocabularyRequest) {
    CreateVocabularyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVocabularyRequest = exports.CreateVocabularyRequest || (exports.CreateVocabularyRequest = {}));
var CreateVocabularyResponse;
(function (CreateVocabularyResponse) {
    CreateVocabularyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVocabularyResponse = exports.CreateVocabularyResponse || (exports.CreateVocabularyResponse = {}));
var CreateVocabularyFilterRequest;
(function (CreateVocabularyFilterRequest) {
    CreateVocabularyFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVocabularyFilterRequest = exports.CreateVocabularyFilterRequest || (exports.CreateVocabularyFilterRequest = {}));
var CreateVocabularyFilterResponse;
(function (CreateVocabularyFilterResponse) {
    CreateVocabularyFilterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateVocabularyFilterResponse = exports.CreateVocabularyFilterResponse || (exports.CreateVocabularyFilterResponse = {}));
var DeleteLanguageModelRequest;
(function (DeleteLanguageModelRequest) {
    DeleteLanguageModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLanguageModelRequest = exports.DeleteLanguageModelRequest || (exports.DeleteLanguageModelRequest = {}));
var DeleteMedicalTranscriptionJobRequest;
(function (DeleteMedicalTranscriptionJobRequest) {
    DeleteMedicalTranscriptionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMedicalTranscriptionJobRequest = exports.DeleteMedicalTranscriptionJobRequest || (exports.DeleteMedicalTranscriptionJobRequest = {}));
var DeleteMedicalVocabularyRequest;
(function (DeleteMedicalVocabularyRequest) {
    DeleteMedicalVocabularyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMedicalVocabularyRequest = exports.DeleteMedicalVocabularyRequest || (exports.DeleteMedicalVocabularyRequest = {}));
var NotFoundException;
(function (NotFoundException) {
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var DeleteTranscriptionJobRequest;
(function (DeleteTranscriptionJobRequest) {
    DeleteTranscriptionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTranscriptionJobRequest = exports.DeleteTranscriptionJobRequest || (exports.DeleteTranscriptionJobRequest = {}));
var DeleteVocabularyRequest;
(function (DeleteVocabularyRequest) {
    DeleteVocabularyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVocabularyRequest = exports.DeleteVocabularyRequest || (exports.DeleteVocabularyRequest = {}));
var DeleteVocabularyFilterRequest;
(function (DeleteVocabularyFilterRequest) {
    DeleteVocabularyFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteVocabularyFilterRequest = exports.DeleteVocabularyFilterRequest || (exports.DeleteVocabularyFilterRequest = {}));
var DescribeLanguageModelRequest;
(function (DescribeLanguageModelRequest) {
    DescribeLanguageModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLanguageModelRequest = exports.DescribeLanguageModelRequest || (exports.DescribeLanguageModelRequest = {}));
var LanguageModel;
(function (LanguageModel) {
    LanguageModel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LanguageModel = exports.LanguageModel || (exports.LanguageModel = {}));
var DescribeLanguageModelResponse;
(function (DescribeLanguageModelResponse) {
    DescribeLanguageModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLanguageModelResponse = exports.DescribeLanguageModelResponse || (exports.DescribeLanguageModelResponse = {}));
var GetMedicalTranscriptionJobRequest;
(function (GetMedicalTranscriptionJobRequest) {
    GetMedicalTranscriptionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMedicalTranscriptionJobRequest = exports.GetMedicalTranscriptionJobRequest || (exports.GetMedicalTranscriptionJobRequest = {}));
var Media;
(function (Media) {
    Media.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Media = exports.Media || (exports.Media = {}));
var MediaFormat;
(function (MediaFormat) {
    MediaFormat["AMR"] = "amr";
    MediaFormat["FLAC"] = "flac";
    MediaFormat["MP3"] = "mp3";
    MediaFormat["MP4"] = "mp4";
    MediaFormat["OGG"] = "ogg";
    MediaFormat["WAV"] = "wav";
    MediaFormat["WEBM"] = "webm";
})(MediaFormat = exports.MediaFormat || (exports.MediaFormat = {}));
var MedicalTranscriptionSetting;
(function (MedicalTranscriptionSetting) {
    MedicalTranscriptionSetting.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MedicalTranscriptionSetting = exports.MedicalTranscriptionSetting || (exports.MedicalTranscriptionSetting = {}));
var Specialty;
(function (Specialty) {
    Specialty["PRIMARYCARE"] = "PRIMARYCARE";
})(Specialty = exports.Specialty || (exports.Specialty = {}));
var MedicalTranscript;
(function (MedicalTranscript) {
    MedicalTranscript.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MedicalTranscript = exports.MedicalTranscript || (exports.MedicalTranscript = {}));
var TranscriptionJobStatus;
(function (TranscriptionJobStatus) {
    TranscriptionJobStatus["COMPLETED"] = "COMPLETED";
    TranscriptionJobStatus["FAILED"] = "FAILED";
    TranscriptionJobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TranscriptionJobStatus["QUEUED"] = "QUEUED";
})(TranscriptionJobStatus = exports.TranscriptionJobStatus || (exports.TranscriptionJobStatus = {}));
var Type;
(function (Type) {
    Type["CONVERSATION"] = "CONVERSATION";
    Type["DICTATION"] = "DICTATION";
})(Type = exports.Type || (exports.Type = {}));
var MedicalTranscriptionJob;
(function (MedicalTranscriptionJob) {
    MedicalTranscriptionJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MedicalTranscriptionJob = exports.MedicalTranscriptionJob || (exports.MedicalTranscriptionJob = {}));
var GetMedicalTranscriptionJobResponse;
(function (GetMedicalTranscriptionJobResponse) {
    GetMedicalTranscriptionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMedicalTranscriptionJobResponse = exports.GetMedicalTranscriptionJobResponse || (exports.GetMedicalTranscriptionJobResponse = {}));
var GetMedicalVocabularyRequest;
(function (GetMedicalVocabularyRequest) {
    GetMedicalVocabularyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMedicalVocabularyRequest = exports.GetMedicalVocabularyRequest || (exports.GetMedicalVocabularyRequest = {}));
var GetMedicalVocabularyResponse;
(function (GetMedicalVocabularyResponse) {
    GetMedicalVocabularyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMedicalVocabularyResponse = exports.GetMedicalVocabularyResponse || (exports.GetMedicalVocabularyResponse = {}));
var GetTranscriptionJobRequest;
(function (GetTranscriptionJobRequest) {
    GetTranscriptionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTranscriptionJobRequest = exports.GetTranscriptionJobRequest || (exports.GetTranscriptionJobRequest = {}));
var JobExecutionSettings;
(function (JobExecutionSettings) {
    JobExecutionSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobExecutionSettings = exports.JobExecutionSettings || (exports.JobExecutionSettings = {}));
var ModelSettings;
(function (ModelSettings) {
    ModelSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelSettings = exports.ModelSettings || (exports.ModelSettings = {}));
var VocabularyFilterMethod;
(function (VocabularyFilterMethod) {
    VocabularyFilterMethod["MASK"] = "mask";
    VocabularyFilterMethod["REMOVE"] = "remove";
    VocabularyFilterMethod["TAG"] = "tag";
})(VocabularyFilterMethod = exports.VocabularyFilterMethod || (exports.VocabularyFilterMethod = {}));
var Settings;
(function (Settings) {
    Settings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Settings = exports.Settings || (exports.Settings = {}));
var Transcript;
(function (Transcript) {
    Transcript.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Transcript = exports.Transcript || (exports.Transcript = {}));
var TranscriptionJob;
(function (TranscriptionJob) {
    TranscriptionJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TranscriptionJob = exports.TranscriptionJob || (exports.TranscriptionJob = {}));
var GetTranscriptionJobResponse;
(function (GetTranscriptionJobResponse) {
    GetTranscriptionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTranscriptionJobResponse = exports.GetTranscriptionJobResponse || (exports.GetTranscriptionJobResponse = {}));
var GetVocabularyRequest;
(function (GetVocabularyRequest) {
    GetVocabularyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVocabularyRequest = exports.GetVocabularyRequest || (exports.GetVocabularyRequest = {}));
var GetVocabularyResponse;
(function (GetVocabularyResponse) {
    GetVocabularyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVocabularyResponse = exports.GetVocabularyResponse || (exports.GetVocabularyResponse = {}));
var GetVocabularyFilterRequest;
(function (GetVocabularyFilterRequest) {
    GetVocabularyFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVocabularyFilterRequest = exports.GetVocabularyFilterRequest || (exports.GetVocabularyFilterRequest = {}));
var GetVocabularyFilterResponse;
(function (GetVocabularyFilterResponse) {
    GetVocabularyFilterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetVocabularyFilterResponse = exports.GetVocabularyFilterResponse || (exports.GetVocabularyFilterResponse = {}));
var ListLanguageModelsRequest;
(function (ListLanguageModelsRequest) {
    ListLanguageModelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLanguageModelsRequest = exports.ListLanguageModelsRequest || (exports.ListLanguageModelsRequest = {}));
var ListLanguageModelsResponse;
(function (ListLanguageModelsResponse) {
    ListLanguageModelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLanguageModelsResponse = exports.ListLanguageModelsResponse || (exports.ListLanguageModelsResponse = {}));
var ListMedicalTranscriptionJobsRequest;
(function (ListMedicalTranscriptionJobsRequest) {
    ListMedicalTranscriptionJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMedicalTranscriptionJobsRequest = exports.ListMedicalTranscriptionJobsRequest || (exports.ListMedicalTranscriptionJobsRequest = {}));
var OutputLocationType;
(function (OutputLocationType) {
    OutputLocationType["CUSTOMER_BUCKET"] = "CUSTOMER_BUCKET";
    OutputLocationType["SERVICE_BUCKET"] = "SERVICE_BUCKET";
})(OutputLocationType = exports.OutputLocationType || (exports.OutputLocationType = {}));
var MedicalTranscriptionJobSummary;
(function (MedicalTranscriptionJobSummary) {
    MedicalTranscriptionJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MedicalTranscriptionJobSummary = exports.MedicalTranscriptionJobSummary || (exports.MedicalTranscriptionJobSummary = {}));
var ListMedicalTranscriptionJobsResponse;
(function (ListMedicalTranscriptionJobsResponse) {
    ListMedicalTranscriptionJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMedicalTranscriptionJobsResponse = exports.ListMedicalTranscriptionJobsResponse || (exports.ListMedicalTranscriptionJobsResponse = {}));
var ListMedicalVocabulariesRequest;
(function (ListMedicalVocabulariesRequest) {
    ListMedicalVocabulariesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMedicalVocabulariesRequest = exports.ListMedicalVocabulariesRequest || (exports.ListMedicalVocabulariesRequest = {}));
var VocabularyInfo;
(function (VocabularyInfo) {
    VocabularyInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VocabularyInfo = exports.VocabularyInfo || (exports.VocabularyInfo = {}));
var ListMedicalVocabulariesResponse;
(function (ListMedicalVocabulariesResponse) {
    ListMedicalVocabulariesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMedicalVocabulariesResponse = exports.ListMedicalVocabulariesResponse || (exports.ListMedicalVocabulariesResponse = {}));
var ListTranscriptionJobsRequest;
(function (ListTranscriptionJobsRequest) {
    ListTranscriptionJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTranscriptionJobsRequest = exports.ListTranscriptionJobsRequest || (exports.ListTranscriptionJobsRequest = {}));
var TranscriptionJobSummary;
(function (TranscriptionJobSummary) {
    TranscriptionJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TranscriptionJobSummary = exports.TranscriptionJobSummary || (exports.TranscriptionJobSummary = {}));
var ListTranscriptionJobsResponse;
(function (ListTranscriptionJobsResponse) {
    ListTranscriptionJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTranscriptionJobsResponse = exports.ListTranscriptionJobsResponse || (exports.ListTranscriptionJobsResponse = {}));
var ListVocabulariesRequest;
(function (ListVocabulariesRequest) {
    ListVocabulariesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVocabulariesRequest = exports.ListVocabulariesRequest || (exports.ListVocabulariesRequest = {}));
var ListVocabulariesResponse;
(function (ListVocabulariesResponse) {
    ListVocabulariesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVocabulariesResponse = exports.ListVocabulariesResponse || (exports.ListVocabulariesResponse = {}));
var ListVocabularyFiltersRequest;
(function (ListVocabularyFiltersRequest) {
    ListVocabularyFiltersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVocabularyFiltersRequest = exports.ListVocabularyFiltersRequest || (exports.ListVocabularyFiltersRequest = {}));
var VocabularyFilterInfo;
(function (VocabularyFilterInfo) {
    VocabularyFilterInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VocabularyFilterInfo = exports.VocabularyFilterInfo || (exports.VocabularyFilterInfo = {}));
var ListVocabularyFiltersResponse;
(function (ListVocabularyFiltersResponse) {
    ListVocabularyFiltersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListVocabularyFiltersResponse = exports.ListVocabularyFiltersResponse || (exports.ListVocabularyFiltersResponse = {}));
var StartMedicalTranscriptionJobRequest;
(function (StartMedicalTranscriptionJobRequest) {
    StartMedicalTranscriptionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMedicalTranscriptionJobRequest = exports.StartMedicalTranscriptionJobRequest || (exports.StartMedicalTranscriptionJobRequest = {}));
var StartMedicalTranscriptionJobResponse;
(function (StartMedicalTranscriptionJobResponse) {
    StartMedicalTranscriptionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMedicalTranscriptionJobResponse = exports.StartMedicalTranscriptionJobResponse || (exports.StartMedicalTranscriptionJobResponse = {}));
var StartTranscriptionJobRequest;
(function (StartTranscriptionJobRequest) {
    StartTranscriptionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTranscriptionJobRequest = exports.StartTranscriptionJobRequest || (exports.StartTranscriptionJobRequest = {}));
var StartTranscriptionJobResponse;
(function (StartTranscriptionJobResponse) {
    StartTranscriptionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTranscriptionJobResponse = exports.StartTranscriptionJobResponse || (exports.StartTranscriptionJobResponse = {}));
var UpdateMedicalVocabularyRequest;
(function (UpdateMedicalVocabularyRequest) {
    UpdateMedicalVocabularyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMedicalVocabularyRequest = exports.UpdateMedicalVocabularyRequest || (exports.UpdateMedicalVocabularyRequest = {}));
var UpdateMedicalVocabularyResponse;
(function (UpdateMedicalVocabularyResponse) {
    UpdateMedicalVocabularyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMedicalVocabularyResponse = exports.UpdateMedicalVocabularyResponse || (exports.UpdateMedicalVocabularyResponse = {}));
var UpdateVocabularyRequest;
(function (UpdateVocabularyRequest) {
    UpdateVocabularyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVocabularyRequest = exports.UpdateVocabularyRequest || (exports.UpdateVocabularyRequest = {}));
var UpdateVocabularyResponse;
(function (UpdateVocabularyResponse) {
    UpdateVocabularyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVocabularyResponse = exports.UpdateVocabularyResponse || (exports.UpdateVocabularyResponse = {}));
var UpdateVocabularyFilterRequest;
(function (UpdateVocabularyFilterRequest) {
    UpdateVocabularyFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVocabularyFilterRequest = exports.UpdateVocabularyFilterRequest || (exports.UpdateVocabularyFilterRequest = {}));
var UpdateVocabularyFilterResponse;
(function (UpdateVocabularyFilterResponse) {
    UpdateVocabularyFilterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateVocabularyFilterResponse = exports.UpdateVocabularyFilterResponse || (exports.UpdateVocabularyFilterResponse = {}));
//# sourceMappingURL=models_0.js.map
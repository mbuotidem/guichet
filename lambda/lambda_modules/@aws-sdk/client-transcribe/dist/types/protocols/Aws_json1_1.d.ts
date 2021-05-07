import { CreateLanguageModelCommandInput, CreateLanguageModelCommandOutput } from "../commands/CreateLanguageModelCommand";
import { CreateMedicalVocabularyCommandInput, CreateMedicalVocabularyCommandOutput } from "../commands/CreateMedicalVocabularyCommand";
import { CreateVocabularyCommandInput, CreateVocabularyCommandOutput } from "../commands/CreateVocabularyCommand";
import { CreateVocabularyFilterCommandInput, CreateVocabularyFilterCommandOutput } from "../commands/CreateVocabularyFilterCommand";
import { DeleteLanguageModelCommandInput, DeleteLanguageModelCommandOutput } from "../commands/DeleteLanguageModelCommand";
import { DeleteMedicalTranscriptionJobCommandInput, DeleteMedicalTranscriptionJobCommandOutput } from "../commands/DeleteMedicalTranscriptionJobCommand";
import { DeleteMedicalVocabularyCommandInput, DeleteMedicalVocabularyCommandOutput } from "../commands/DeleteMedicalVocabularyCommand";
import { DeleteTranscriptionJobCommandInput, DeleteTranscriptionJobCommandOutput } from "../commands/DeleteTranscriptionJobCommand";
import { DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput } from "../commands/DeleteVocabularyCommand";
import { DeleteVocabularyFilterCommandInput, DeleteVocabularyFilterCommandOutput } from "../commands/DeleteVocabularyFilterCommand";
import { DescribeLanguageModelCommandInput, DescribeLanguageModelCommandOutput } from "../commands/DescribeLanguageModelCommand";
import { GetMedicalTranscriptionJobCommandInput, GetMedicalTranscriptionJobCommandOutput } from "../commands/GetMedicalTranscriptionJobCommand";
import { GetMedicalVocabularyCommandInput, GetMedicalVocabularyCommandOutput } from "../commands/GetMedicalVocabularyCommand";
import { GetTranscriptionJobCommandInput, GetTranscriptionJobCommandOutput } from "../commands/GetTranscriptionJobCommand";
import { GetVocabularyCommandInput, GetVocabularyCommandOutput } from "../commands/GetVocabularyCommand";
import { GetVocabularyFilterCommandInput, GetVocabularyFilterCommandOutput } from "../commands/GetVocabularyFilterCommand";
import { ListLanguageModelsCommandInput, ListLanguageModelsCommandOutput } from "../commands/ListLanguageModelsCommand";
import { ListMedicalTranscriptionJobsCommandInput, ListMedicalTranscriptionJobsCommandOutput } from "../commands/ListMedicalTranscriptionJobsCommand";
import { ListMedicalVocabulariesCommandInput, ListMedicalVocabulariesCommandOutput } from "../commands/ListMedicalVocabulariesCommand";
import { ListTranscriptionJobsCommandInput, ListTranscriptionJobsCommandOutput } from "../commands/ListTranscriptionJobsCommand";
import { ListVocabulariesCommandInput, ListVocabulariesCommandOutput } from "../commands/ListVocabulariesCommand";
import { ListVocabularyFiltersCommandInput, ListVocabularyFiltersCommandOutput } from "../commands/ListVocabularyFiltersCommand";
import { StartMedicalTranscriptionJobCommandInput, StartMedicalTranscriptionJobCommandOutput } from "../commands/StartMedicalTranscriptionJobCommand";
import { StartTranscriptionJobCommandInput, StartTranscriptionJobCommandOutput } from "../commands/StartTranscriptionJobCommand";
import { UpdateMedicalVocabularyCommandInput, UpdateMedicalVocabularyCommandOutput } from "../commands/UpdateMedicalVocabularyCommand";
import { UpdateVocabularyCommandInput, UpdateVocabularyCommandOutput } from "../commands/UpdateVocabularyCommand";
import { UpdateVocabularyFilterCommandInput, UpdateVocabularyFilterCommandOutput } from "../commands/UpdateVocabularyFilterCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1CreateLanguageModelCommand: (input: CreateLanguageModelCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateMedicalVocabularyCommand: (input: CreateMedicalVocabularyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateVocabularyCommand: (input: CreateVocabularyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateVocabularyFilterCommand: (input: CreateVocabularyFilterCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteLanguageModelCommand: (input: DeleteLanguageModelCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteMedicalTranscriptionJobCommand: (input: DeleteMedicalTranscriptionJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteMedicalVocabularyCommand: (input: DeleteMedicalVocabularyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteTranscriptionJobCommand: (input: DeleteTranscriptionJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteVocabularyCommand: (input: DeleteVocabularyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteVocabularyFilterCommand: (input: DeleteVocabularyFilterCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeLanguageModelCommand: (input: DescribeLanguageModelCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetMedicalTranscriptionJobCommand: (input: GetMedicalTranscriptionJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetMedicalVocabularyCommand: (input: GetMedicalVocabularyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetTranscriptionJobCommand: (input: GetTranscriptionJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetVocabularyCommand: (input: GetVocabularyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetVocabularyFilterCommand: (input: GetVocabularyFilterCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListLanguageModelsCommand: (input: ListLanguageModelsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListMedicalTranscriptionJobsCommand: (input: ListMedicalTranscriptionJobsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListMedicalVocabulariesCommand: (input: ListMedicalVocabulariesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListTranscriptionJobsCommand: (input: ListTranscriptionJobsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListVocabulariesCommand: (input: ListVocabulariesCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListVocabularyFiltersCommand: (input: ListVocabularyFiltersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartMedicalTranscriptionJobCommand: (input: StartMedicalTranscriptionJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1StartTranscriptionJobCommand: (input: StartTranscriptionJobCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateMedicalVocabularyCommand: (input: UpdateMedicalVocabularyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateVocabularyCommand: (input: UpdateVocabularyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateVocabularyFilterCommand: (input: UpdateVocabularyFilterCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1CreateLanguageModelCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateLanguageModelCommandOutput>;
export declare const deserializeAws_json1_1CreateMedicalVocabularyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateMedicalVocabularyCommandOutput>;
export declare const deserializeAws_json1_1CreateVocabularyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateVocabularyCommandOutput>;
export declare const deserializeAws_json1_1CreateVocabularyFilterCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateVocabularyFilterCommandOutput>;
export declare const deserializeAws_json1_1DeleteLanguageModelCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteLanguageModelCommandOutput>;
export declare const deserializeAws_json1_1DeleteMedicalTranscriptionJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteMedicalTranscriptionJobCommandOutput>;
export declare const deserializeAws_json1_1DeleteMedicalVocabularyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteMedicalVocabularyCommandOutput>;
export declare const deserializeAws_json1_1DeleteTranscriptionJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteTranscriptionJobCommandOutput>;
export declare const deserializeAws_json1_1DeleteVocabularyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteVocabularyCommandOutput>;
export declare const deserializeAws_json1_1DeleteVocabularyFilterCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteVocabularyFilterCommandOutput>;
export declare const deserializeAws_json1_1DescribeLanguageModelCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeLanguageModelCommandOutput>;
export declare const deserializeAws_json1_1GetMedicalTranscriptionJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetMedicalTranscriptionJobCommandOutput>;
export declare const deserializeAws_json1_1GetMedicalVocabularyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetMedicalVocabularyCommandOutput>;
export declare const deserializeAws_json1_1GetTranscriptionJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetTranscriptionJobCommandOutput>;
export declare const deserializeAws_json1_1GetVocabularyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetVocabularyCommandOutput>;
export declare const deserializeAws_json1_1GetVocabularyFilterCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetVocabularyFilterCommandOutput>;
export declare const deserializeAws_json1_1ListLanguageModelsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListLanguageModelsCommandOutput>;
export declare const deserializeAws_json1_1ListMedicalTranscriptionJobsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListMedicalTranscriptionJobsCommandOutput>;
export declare const deserializeAws_json1_1ListMedicalVocabulariesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListMedicalVocabulariesCommandOutput>;
export declare const deserializeAws_json1_1ListTranscriptionJobsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTranscriptionJobsCommandOutput>;
export declare const deserializeAws_json1_1ListVocabulariesCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListVocabulariesCommandOutput>;
export declare const deserializeAws_json1_1ListVocabularyFiltersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListVocabularyFiltersCommandOutput>;
export declare const deserializeAws_json1_1StartMedicalTranscriptionJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartMedicalTranscriptionJobCommandOutput>;
export declare const deserializeAws_json1_1StartTranscriptionJobCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartTranscriptionJobCommandOutput>;
export declare const deserializeAws_json1_1UpdateMedicalVocabularyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateMedicalVocabularyCommandOutput>;
export declare const deserializeAws_json1_1UpdateVocabularyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateVocabularyCommandOutput>;
export declare const deserializeAws_json1_1UpdateVocabularyFilterCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateVocabularyFilterCommandOutput>;

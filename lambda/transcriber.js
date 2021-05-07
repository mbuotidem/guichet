//Constants and Environment variables
const RESERVED_RESPONSE = `Error: You're using AWS reserved keywords as attributes`,
    DYNAMODB_EXECUTION_ERROR = `Error: Execution update, caused a Dynamodb error, please take a look at your CloudWatch Logs.`;
const REGION = process.env.AWS_REGION;
const TABLE_NAME = process.env.TABLE_NAME || '';
const BUCKET_NAME = process.env.BUCKET_NAME || '';
let result;
let transcriptUrl;;
let transcript;

//Required modules
const {
    TranscribeClient,
    StartTranscriptionJobCommand,
    GetTranscriptionJobCommand,
} = require("@aws-sdk/client-transcribe");

const axios = require("axios");
const aws = require('aws-sdk');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });
const db = new aws.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });


// Create the transcription job name. In this case, it's the current date and time.
const today = new Date();
const date =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate();
const time =
    today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
const jobName = date + "-time-" + time;


// Create an Amazon Transcribe service client object.
const client = new TranscribeClient({
    region: REGION
});


// Create the AWS Transcribe transcription job.
const createTranscriptionJob = async (recording, jobName, bucket, key) => {
    // Set the parameters for transcriptions job
    const params = {
        TranscriptionJobName: jobName + "-job",
        LanguageCode: "en-US", // For example, 'en-US',
        //OutputBucketName: bucket,
        //OutputKey: key,
        Media: {
            MediaFileUri: recording, // For example, "https://transcribe-demo.s3-REGION.amazonaws.com/hello_world.wav"
        },
    };
    try {
        // Start the transcription job.
        const data = await client.send(new StartTranscriptionJobCommand(params));
        console.log("Transcription submitted. Status: ", data.TranscriptionJob.TranscriptionJobStatus);
        const jobName = data.TranscriptionJob.TranscriptionJobName;
        return jobName;

    } catch (err) {
        console.log("Error", err);
    }
};


const getData = async url => {
    try {
        const response = await axios.get(url);
        console.log("Transcription submitted. Status: ", response.data.status);
        result = response.data.results.transcripts[0].transcript;
        return result
    } catch (error) {
        console.log(error);
    }
};

function sleep(ms) {
    // add ms millisecond timeout before promise resolution
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getFinishedJob(jobDetails) {
    await sleep(30000);
    status = await client.send(new GetTranscriptionJobCommand(jobDetails));

    transcriptUrl = status['TranscriptionJob']['Transcript']['TranscriptFileUri'];

    transcript = await getData(transcriptUrl);

    console.log(transcript);

    const item = {

    }

    const params = {
        TableName: TABLE_NAME,
        Item: {
            'audio': { S: jobDetails.TranscriptionJobName },
            'transcript': { S: transcript }
        }
    };

    try {
        console.log(params)
        await db.put(params).promise();
        return { statusCode: 201, body: '' };
    } catch (dbError) {
        const errorResponse = dbError.code === 'ValidationException' && dbError.message.includes('reserved keyword') ?
            DYNAMODB_EXECUTION_ERROR : RESERVED_RESPONSE;
        return { statusCode: 500, body: errorResponse };
    }

}

exports.handler = async function (event) {
    console.log("request:", JSON.stringify(event, undefined, 2));

    // Get the object from the event and show its content type
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));

    try {
        result = await createTranscriptionJob(
            "s3://" + bucket + "/" + key,
            jobName,
            //bucket,
            //key
        );
    } catch (err) {
        console.log(err);
        const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
        console.log(message);
        throw new Error(message);
    }


    const jobDetails = {
        TranscriptionJobName: result
    };

    console.log(jobDetails);

    hello = await getFinishedJob(jobDetails);


    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `Transcript: ${transcript}\n `
    };



};




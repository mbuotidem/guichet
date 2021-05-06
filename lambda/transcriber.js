//Environment variables
const REGION = process.env.AWS_REGION;
const TABLE_NAME = process.env.TABLE_NAME || '';
const BUCKET_NAME = process.env.BUCKET_NAME || '';

//Required sdk
const {
    TranscribeClient,
    StartTranscriptionJobCommand,
    GetTranscriptionJobCommand,
} = require("@aws-sdk/client-transcribe");

const aws = require('aws-sdk');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });


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
        console.log("Success - transcription submitted", data);
    } catch (err) {
        console.log("Error", err);
    }
};



exports.handler = async function (event) {
    console.log("request:", JSON.stringify(event, undefined, 2));

    // Get the object from the event and show its content type
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const params = {
        Bucket: bucket,
        Key: key,
    };
    try {
        const { ContentType } = await s3.getObject(params).promise();
        console.log('CONTENT TYPE:', ContentType);

        createTranscriptionJob(
            "s3://" + params.Bucket + "/" + key,
            jobName,
            //bucket,
            //key
        );


        //return ContentType;
    } catch (err) {
        console.log(err);
        const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
        console.log(message);
        throw new Error(message);
    }


    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `Ran without errors\n`
    };
};




exports.handler = async function (event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `Hello! You're watching the demo, Dr. V at ${event.path}\n`
    };
};

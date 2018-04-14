'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    console.log('##### Received event:', JSON.stringify(event, null, 2));

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });

   const params = event.queryStringParameters;

    switch (event.httpMethod) {
        case 'GET':
            done(undefined, {ToUpper:params["string"].toUpperCase()});
            break;
        default:
            done(new Error(`Unsupported methodx "${event.httpMethod}"`));
    }
};

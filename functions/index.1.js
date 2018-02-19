'use strict';

const functions = require('firebase-functions'); // Cloud Functions for Firebase library
const DialogflowApp = require('actions-on-google').DialogflowApp; // Google Assistant helper library
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  if (request.body.result) {
    processV1Request(request, response);
  } else {
    console.log('Invalid Request');
    return response.status(400).end('Invalid Webhook Request (expecting v1 or v2 webhook request)');
  }
});

function processV1Request(request, response) {
  let action = request.body.result.action; // https://dialogflow.com/docs/actions-and-parameters
  let parameters = request.body.result.parameters; // https://dialogflow.com/docs/actions-and-parameters
  let inputContexts = request.body.result.contexts; // https://dialogflow.com/docs/contexts
  let requestSource = (request.body.originalRequest) ? request.body.originalRequest.source : undefined;

  const app = new DialogflowApp({ request: request, response: response });

  const actionHandlers = {
    // The default welcome intent has been matched, welcome the user (https://dialogflow.com/docs/events#default_welcome_intent)
    'input.welcome': () => sendResponse('Hello, Welcome to my Dialogflow agent!'),
    'input.unknown': () => sendResponse('I\'m having trouble, can you try that again?'),
    'default': () => {
      let responseToUser = {
        speech: 'This message is from Dialogflow\'s Cloud Functions for Firebase editor!', // spoken response
        text: 'This is from Dialogflow\'s Cloud Functions for Firebase editor! :-)' // displayed response
      };
      saveResponse(responseToUser);
      sendResponse(responseToUser);
    }
  };

  // If undefined or unknown action use the default handler
  if (!actionHandlers[action]) action = 'default';

  // Run the proper handler function to handle the request from Dialogflow
  actionHandlers[action]();

  // Function to send correctly formatted responses to Dialogflow which are then sent to the user
  function sendResponse(responseToUser) {
    let responseJson = {};
    responseJson.speech = responseToUser; // spoken response
    responseJson.displayText = responseToUser; // displayed response
    response.json(responseJson); // Send response to Dialogflow
  }

  function saveResponse(responseToUser) {
    functions.database.ref('/messages').add(responseToUser);
  }
}

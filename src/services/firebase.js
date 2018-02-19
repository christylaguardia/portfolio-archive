import firebase from 'firebase';

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
//   databaseURL: `https://${process.env.REACT_APP_PROJECT_ID}.firebaseio.com`,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: `${process.env.REACT_APP_PROJECT_ID}.appspot.com`,
//   messagingSenderId: process.env.REACT_APP_SENDER_ID
// };

// const fbKey = process.env.REACT_APP_API_KEY;
// const fbName = process.env.REACT_APP_PROJECT_ID;
// const fbMsgId = process.env.REACT_APP_MESSAGING_SENDER_ID

// var config = {
//   apiKey: fbKey,
//   authDomain: `${fbName}.firebaseapp.com`,
//   databaseURL: `https://${fbName}.firebaseio.com`,
//   projectId: `${fbName}`,
//   storageBucket: `${fbName}.appspot.com`,
//   messagingSenderId: fbMsgId
// };

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database();
// export const messagesRef = db.ref('messages');
export const projectsRef = db.ref('projects');

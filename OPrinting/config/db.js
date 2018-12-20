import Firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/storage';
import '@firebase/auth';

 let config = {
  apiKey: "AIzaSyBz5bBfpfiV8E4nx0umCz1_AN5s5zdpenU",
  authDomain: "oprinting-466a2.firebaseapp.com",
  databaseURL: "https://oprinting-466a2.firebaseio.com",
  projectId: "oprinting-466a2",
  storageBucket: "oprinting-466a2.appspot.com",
  messagingSenderId: "409358991213"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();

import Firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/storage';
import '@firebase/auth';

 let config = {
  apiKey: "AIzaSyDc0wyCFKIG8zzIAM8aKuHU_wsrQU8Pc6Y",
    authDomain: "oprinting-4ef57.firebaseapp.com",
    databaseURL: "https://oprinting-4ef57.firebaseio.com",
    projectId: "oprinting-4ef57",
    storageBucket: "oprinting-4ef57.appspot.com",
    messagingSenderId: "915067445029"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();

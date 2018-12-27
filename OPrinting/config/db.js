import Firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/storage';
import '@firebase/auth';

 let config = {
  apiKey: "AIzaSyBrdHREz5n1-zNSV1IwKLoQeyaH7ZJrRqY",
  authDomain: "mizi-test.firebaseapp.com",
  databaseURL: "https://mizi-test.firebaseio.com",
  projectId: "mizi-test",
  storageBucket: "mizi-test.appspot.com",
  messagingSenderId: "472119117142"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();

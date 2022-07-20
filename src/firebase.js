import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC51JNlZgAwGHhzVyY-lZEgLXL2x24f7T4",
    authDomain: "slack-clone-app-79241.firebaseapp.com",
    projectId: "slack-clone-app-79241",
    storageBucket: "slack-clone-app-79241.appspot.com",
    messagingSenderId: "798915768822",
    appId: "1:798915768822:web:0773edc7444d28d31517d7",
    measurementId: "G-MCF0VWXSRT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };

  export default db;
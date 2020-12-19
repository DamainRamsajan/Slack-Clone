import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBM2jzZD2oBs0W2mqh9_3jNDi7-g6hLjW0",
    authDomain: "slack-clone-5a06f.firebaseapp.com",
    projectId: "slack-clone-5a06f",
    storageBucket: "slack-clone-5a06f.appspot.com",
    messagingSenderId: "994272430798",
    appId: "1:994272430798:web:467dc09cf610db335a9e9f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider}

  export default db;
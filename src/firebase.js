import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBoKh09GT0EPaVMJJcwN7ISbvqkf6xIr9M",
    authDomain: "discord-ca3c2.firebaseapp.com",
    projectId: "discord-ca3c2",
    storageBucket: "discord-ca3c2.appspot.com",
    messagingSenderId: "186840434435",
    appId: "1:186840434435:web:de58ce424a152f6f194b36",
    measurementId: "G-GGZSE2XWGG"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebase.auth();

  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
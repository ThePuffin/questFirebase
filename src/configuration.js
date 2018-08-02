import firebase from "firebase";
import Rebase from "re-base";


// Initialize Firebase
let config = {
  apiKey: "AIzaSyBstqCniQx642CmuEPGUyGlmOuKAjGQzv8",
  authDomain: "walkingquest-4ee5f.firebaseapp.com",
  databaseURL: "https://walkingquest-4ee5f.firebaseio.com",
  projectId: "walkingquest-4ee5f",
  storageBucket: "walkingquest-4ee5f.appspot.com",
  messagingSenderId: "920573363867"
};

// initialise le module firebase avec votre base de données Firebase
const configuration = firebase.initializeApp(config);
const base = Rebase.createClass(configuration.database());
export {configuration, base};

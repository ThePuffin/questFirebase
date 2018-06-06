import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


  // configuration
  const configFirebase = {
    apiKey: "AIzaSyCfNu6X551Fk-R-v5RcYyMUD8zF-VFo6p8",
    authDomain: "gameofthrone-2c8c9.firebaseapp.com",
    databaseURL: "https://gameofthrone-2c8c9.firebaseio.com",
  };
  firebase.initializeApp(configFirebase);
  firebase.auth().languageCode = 'fr';

  


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

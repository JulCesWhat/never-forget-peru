import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7cyaKRJB25OkP9boXD6kPj1DFB2qf-oE",
  authDomain: "never-forget-peru.firebaseapp.com",
  projectId: "never-forget-peru",
  storageBucket: "never-forget-peru.appspot.com",
  messagingSenderId: "178362800229",
  appId: "1:178362800229:web:5bcf43caea77846d628e8c",
  measurementId: "G-5TGR30RLES"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

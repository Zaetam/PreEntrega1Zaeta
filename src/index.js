import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getFirestore } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvNrNIMX9-Lqp1y2MhkvDi3jxO9IlRTZE",
  authDomain: "coderhouse-ecommerce-58f34.firebaseapp.com",
  projectId: "coderhouse-ecommerce-58f34",
  storageBucket: "coderhouse-ecommerce-58f34.appspot.com",
  messagingSenderId: "871160170135",
  appId: "1:871160170135:web:e41d733335b7b1ae264bd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db


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

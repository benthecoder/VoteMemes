// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAb5XVnMkEsAqjkLpbS9aO3XN5l8M1Nv9A',
  authDomain: 'hacksc-ca47a.firebaseapp.com',
  projectId: 'hacksc-ca47a',
  storageBucket: 'hacksc-ca47a.appspot.com',
  messagingSenderId: '840746304389',
  appId: '1:840746304389:web:c7901b866d79d2e39efaec',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyAA7Y4qyixyrMSS-VgJEp8OH8ERcnuVuEY",
        authDomain: "shopping-app-959eb.firebaseapp.com",
        databaseURL: "https://shopping-app-959eb.firebaseio.com",
        projectId: "shopping-app-959eb",
        storageBucket: "shopping-app-959eb.appspot.com",
        messagingSenderId: "791606192771",
        appId: "1:791606192771:web:46636a1d91547352a889b6",
        measurementId: "G-VJHGX4RWSZ"
    }
);

const auth = firebase.auth();

export {auth};
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDAyHC9P0mgvyqJgrlgZcynyNpAxnoqQCg',
    authDomain: 'litchat-f3a3d.firebaseapp.com',
    projectId: 'litchat-f3a3d',
    storageBucket: 'litchat-f3a3d.appspot.com',
    messagingSenderId: '280619515466',
    appId: '1:280619515466:web:7ddaf01dbc01ce4e3b70b3',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore;

export { auth, db };
export default firebase;

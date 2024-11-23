import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAi7G3IP10YmrBaGJHnHR3CmTqpPyFCR3M",
    authDomain: "tickets-1a46b.firebaseapp.com",
    projectId: "tickets-1a46b",
    storageBucket: "tickets-1a46b.appspot.com",
    messagingSenderId: "931125091614",
    appId: "1:931125091614:web:3cae9b8f7e1107de6ebd0f",
    measurementId: "G-4XX9F9ZZXS"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
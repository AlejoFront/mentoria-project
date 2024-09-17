import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage }  from 'firebase/storage';

interface IFirebase {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

export const firebaseConfig: IFirebase = {
  apiKey: "AIzaSyAJJrsrKcr3rG5AryscTycOxeaNLI0kAoE",
  authDomain: "mentoria-stefany.firebaseapp.com",
  projectId: "mentoria-stefany",
  storageBucket: "mentoria-stefany.appspot.com",
  messagingSenderId: "269681340846",
  appId: "1:269681340846:web:83508059f812544f1c983f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
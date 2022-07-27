import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHLwFEH8vOn3e1isXHzte65_oq29J8dqY",
  authDomain: "signin-9acc0.firebaseapp.com",
  projectId: "signin-9acc0",
  storageBucket: "signin-9acc0.appspot.com",
  messagingSenderId: "1022492160441",
  appId: "1:1022492160441:web:2987112988f0546c2c4668"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
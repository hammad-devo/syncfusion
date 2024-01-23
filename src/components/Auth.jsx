

import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
     apiKey: 'AIzaSyBdc8ehaBUd6HTXdQ5uUhElCznD9My6lic',
    authDomain: 'finalflatpage.firebaseapp.com',
    projectId: 'finalflatpage',
    storageBucket: 'finalflatpage.appspot.com',
    messagingSenderId: '216738237323',
    appId: '1:216738237323:web:c8651eaaf0a8f811f93d8e',
  };

  initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider();
export const auth = getAuth();

provider.setCustomParameters({ prompt: 'select_account' });
export const authchange=(user)=>auth.onAuthStateChanged(user=>{
    console.log(user)
})
export const signInWithGoogle = () => signInWithPopup(auth,provider).catch(err=>console.log(err));



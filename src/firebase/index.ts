import { firebaseConfig } from "./dev.config";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


const firebaseServiceFactory = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider();

  function googleAuth() {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log({ result })
      }).catch((error) => {
        console.log({ error })
      })
  }

  return {
    app,
    analytics,
    provider,
    googleAuth
  }
}

export const firebaseService = firebaseServiceFactory();

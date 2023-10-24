import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, connectAuthEmulator, getAuth } from "firebase/auth";
import {
  Firestore,
  connectFirestoreEmulator,
  getFirestore,
} from "firebase/firestore";

const config = {
  apiKey: "AIzaSyAaATwb10zLW_Mz9l7mrgzEig0rfNSe7FE",
  authDomain: "mistiboard-test.firebaseapp.com",
  projectId: "mistiboard-test",
  storageBucket: "mistiboard-test.appspot.com",
  messagingSenderId: "811459782636",
  appId: "1:811459782636:web:3f0826446eafa4b85702c9",
  measurementId: "G-MDY71D83SW",
};

export type FirebaseProvider = {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
};

export const FirebaseProviderFactory = () => {
  const app = initializeApp(config);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  if (location.hostname === "localhost") {
    connectAuthEmulator(auth, "http://127.0.0.1:9099");
    connectFirestoreEmulator(firestore, "127.0.0.1", 8080);
  }

  return {
    app,
    auth,
    firestore,
  };
};

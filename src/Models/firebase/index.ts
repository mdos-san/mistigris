import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { v4 } from "uuid";
import {
  GoogleAuthProvider,
  connectAuthEmulator,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { connectFirestoreEmulator, doc, getFirestore, setDoc } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyAaATwb10zLW_Mz9l7mrgzEig0rfNSe7FE",
  authDomain: "mistiboard-test.firebaseapp.com",
  projectId: "mistiboard-test",
  storageBucket: "mistiboard-test.appspot.com",
  messagingSenderId: "811459782636",
  appId: "1:811459782636:web:3f0826446eafa4b85702c9",
  measurementId: "G-MDY71D83SW",
};

export const FirebaseServiceFactory = () => {
  const app = initializeApp(config);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const analytics = getAnalytics(app);

  if (location.hostname === "localhost") {
    connectAuthEmulator(auth, "http://127.0.0.1:9099");
    connectFirestoreEmulator(firestore, "127.0.0.1", 8080);
  }

  const provider = new GoogleAuthProvider();

  function googleAuth() {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const { claims } = await result.user.getIdTokenResult();
        console.log("CLAIMS", claims);
        if (claims.isAdmin) {
          window.location.href = "/admin";
        } else {
          window.location.href = "/forbidden";
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  }

  function saveToFirestore(collection: string, id: string | null, document: any) {
    if (id === null) {
      id = v4();
    }

    const ref = doc(firestore, collection, id);

    setDoc(ref, document)
  }

  return {
    analytics,
    provider,
    googleAuth,
    saveToFirestore,
  };
};

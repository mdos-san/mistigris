import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { v4 } from "uuid";
import {
  GoogleAuthProvider,
  connectAuthEmulator,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import {
  collection,
  connectFirestoreEmulator,
  doc,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import { Subject } from "rxjs";
import { MistiBoardCollections, MistiBoardDatabase } from "../../core/database";
import { Family, FamilyRecord, FamilyRecordSubject } from "../../core/family";

const config = {
  apiKey: "AIzaSyAaATwb10zLW_Mz9l7mrgzEig0rfNSe7FE",
  authDomain: "mistiboard-test.firebaseapp.com",
  projectId: "mistiboard-test",
  storageBucket: "mistiboard-test.appspot.com",
  messagingSenderId: "811459782636",
  appId: "1:811459782636:web:3f0826446eafa4b85702c9",
  measurementId: "G-MDY71D83SW",
};

export const MistiBoardDatabaseFirebaseFactory = (): MistiBoardDatabase => {
  const app = initializeApp(config);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  if (location.hostname === "localhost") {
    connectAuthEmulator(auth, "http://127.0.0.1:9099");
    connectFirestoreEmulator(firestore, "127.0.0.1", 8080);
  }

  let familiesRecord: FamilyRecord = {};
  const familiesSubject: FamilyRecordSubject = new Subject();

  try {
    const c = collection(firestore, "families");
    const q = query(c);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New city: ", change.doc.data());
          const d = change.doc.data() as Family;
          familiesRecord[d.id] = d;
        }
        if (change.type === "modified") {
          console.log("Modified city: ", change.doc.data());
          const d = change.doc.data() as Family;
          familiesRecord[d.id] = d;
        }
        if (change.type === "removed") {
          console.log("Removed city: ", change.doc.data());
          const d = change.doc.data() as Family;
          delete familiesRecord[d.id];
        }
        familiesSubject.next({ ...familiesRecord });
      });
    });
  } catch (e) {
    console.error("Can't init families subject");
  }

  function saveDocumentInCollection(
    collection: string,
    id: string | null,
    document: any,
  ) {
    if (id === null) {
      id = v4();
    }

    const ref = doc(firestore, collection, id);

    setDoc(ref, { ...document, id });
  }

  function getAllDocumentsFromCollectionInRealtime(f: MistiBoardCollections) {
    switch (f) {
      case "families":
        return familiesSubject;
    }
  }

  return {
    saveDocumentInCollection,
    getAllDocumentsFromCollectionInRealtime,
  };
};

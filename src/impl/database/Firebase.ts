import { Family, FamilyRecord, FamilyRecordSubject } from "../../core/family";
import { FirebaseProvider } from "../../firebase";
import { MistiBoardCollections, MistiBoardDatabase } from "../../core/database";
import { Subject } from "rxjs";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { v4 } from "uuid";

export const MistiBoardDatabaseFirebaseFactory = (
  firebaseProvider: FirebaseProvider,
): MistiBoardDatabase => {
  let familiesRecord: FamilyRecord = {};
  const familiesSubject: FamilyRecordSubject = new Subject();

  try {
    const c = collection(firebaseProvider.firestore, "families");
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

    const ref = doc(firebaseProvider.firestore, collection, id);

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

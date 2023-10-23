import { Subject } from "rxjs";
import { MistiBoardDatabase } from "../database";

export type Family = {
  id: string;
  name: string;
};

export type FamilyWithoutId = Omit<Family, "id">;

export type FamilyRecord = Record<Family["id"], Family>;

export type FamilyRecordSubject = Subject<FamilyRecord>;

export type FamilyFeatures = {
  CreateFamily: (f: FamilyWithoutId) => void;
  getFamiliesRecordSubject: () => Subject<FamilyRecord>;
};

export function FamilyFeaturesFactory(
  database: MistiBoardDatabase,
): FamilyFeatures {
  return {
    CreateFamily(newFamily) {
      database.saveDocumentInCollection("families", null, newFamily);
    },
    getFamiliesRecordSubject() {
      return database.getAllDocumentsFromCollectionInRealtime("families");
    },
  };
}

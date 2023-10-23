import { Subject } from "rxjs";

export type MistiBoardCollections = "families";

export type MistiBoardDatabase = {
  saveDocumentInCollection: <T>(
    collection: MistiBoardCollections,
    id: string | null,
    document: T,
  ) => void;
  getAllDocumentsFromCollectionInRealtime: (
    collection: MistiBoardCollections,
  ) => Subject<any>;
};

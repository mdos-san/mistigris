import { FirebaseProviderFactory } from "../firebase";
import { FirebaseAuthFactory } from "../impl/auth/FirebaseAuth";
import { MistiBoardDatabaseFirebaseFactory } from "../impl/database/Firebase";
import { MistiBoardAuth } from "./auth";
import { MistiBoardDatabase } from "./database";
import { FamilyFeatures, FamilyFeaturesFactory } from "./family";

export type MistiBoardCore = {
  database: MistiBoardDatabase;
  family: FamilyFeatures;
  auth: MistiBoardAuth;
};

export function MistiBoardCoreFactory(): MistiBoardCore {
  const firebaseProvider = FirebaseProviderFactory();

  const core = {} as MistiBoardCore;
  core.database = MistiBoardDatabaseFirebaseFactory(firebaseProvider);
  core.family = FamilyFeaturesFactory(core.database);
  core.auth = FirebaseAuthFactory(firebaseProvider);

  return core;
}

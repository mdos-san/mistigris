import { MistiBoardDatabaseFirebaseFactory } from "../impl/database/Firebase";
import { MistiBoardDatabase } from "./database";
import { FamilyFeatures, FamilyFeaturesFactory } from "./family";

export type MistiBoardCore = {
  database: MistiBoardDatabase;
  family: FamilyFeatures;
};

export function MistiBoardCoreFactory(): MistiBoardCore {
  const core = {} as MistiBoardCore;

  core.database = MistiBoardDatabaseFirebaseFactory();
  core.family = FamilyFeaturesFactory(core.database);

  return core;
}

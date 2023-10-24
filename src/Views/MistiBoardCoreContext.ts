import { createContext } from "react";
import { MistiBoardCore, MistiBoardCoreFactory } from "../core";

export const MistiBoardCoreContext = createContext<MistiBoardCore>(
  MistiBoardCoreFactory(),
);

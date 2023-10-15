import CardSelectorFactory from "./CardSelector";
import FamilyLogicFactory from "./FamilyLogic";
import { FirebaseServiceFactory } from "./firebase";

function ModelsFactory() {
  const CardSelector = CardSelectorFactory();
  const FirebaseService = FirebaseServiceFactory();
  const FamilyLogic = FamilyLogicFactory(FirebaseService);

  return {
    CardSelector,
    FirebaseService,
    FamilyLogic,
  };
}

const Models = ModelsFactory();

export default Models;

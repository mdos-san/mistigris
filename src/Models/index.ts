import CardSelectorFactory from "./CardSelector";
import { FirebaseServiceFactory } from "./firebase";

function ModelsFactory() {
  const CardSelector = CardSelectorFactory();
  const FirebaseService = FirebaseServiceFactory();

  return {
    CardSelector,
    FirebaseService,
  };
}

const Models = ModelsFactory();

export default Models;

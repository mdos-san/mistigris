import CardSelectorFactory from "./CardSelector";

function ModelsFactory() {
  const CardSelector = CardSelectorFactory();

  return {
    CardSelector,
  };
}

const Models = ModelsFactory();

export default Models;

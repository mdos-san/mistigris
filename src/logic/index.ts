import CardSelectorFactory from "./CardSelector";

function LogicFactory() {
  const CardSelector = CardSelectorFactory();

  return {
    CardSelector,
  };
}

const Logic = LogicFactory();

export default Logic;

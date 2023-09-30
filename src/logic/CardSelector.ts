import { Subject } from "rxjs";

export type PossibleCardSelection = "none" | "family" | "cat" | "alert";

function CardSelectorFactory() {
  let subject = new Subject<PossibleCardSelection>();

  return {
    subject,
  };
}

export default CardSelectorFactory;

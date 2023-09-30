import { Subject } from "rxjs";
import { PossibleCardSelection } from "../logic/CardSelector";
import Logic from "../logic";

export interface DashboardCardViewModel {
  cardSelectorSubject: Subject<PossibleCardSelection>;
}

function DashboardCardViewModelFactory(): DashboardCardViewModel {
  return {
    cardSelectorSubject: Logic.CardSelector.subject,
  };
}

export default DashboardCardViewModelFactory;

import { Subject } from "rxjs";
import Models from "../Models";
import { PossibleCardSelection } from "../Models/CardSelector";

export interface DashboardCardViewModel {
  cardSelectorSubject: Subject<PossibleCardSelection>;
}

function DashboardCardViewModelFactory(): DashboardCardViewModel {
  return {
    cardSelectorSubject: Models.CardSelector.subject,
  };
}

export default DashboardCardViewModelFactory;

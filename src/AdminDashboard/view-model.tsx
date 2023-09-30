import Logic from "../logic";
import { PossibleCardSelection } from "../logic/CardSelector";
import { Subject } from "rxjs";

export interface AdminDashboardViewModel {
  cardSelectorSubject: Subject<PossibleCardSelection>;
}

function AdminDashboardViewModelFactory(): AdminDashboardViewModel {
  return {
    cardSelectorSubject: Logic.CardSelector.subject,
  };
}

export default AdminDashboardViewModelFactory;

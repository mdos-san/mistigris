import { createContext } from "react";
import DashboardCardViewModelFactory, {
  DashboardCardViewModel,
} from "./DashboardCardViewModel";

interface ViewModel {
  dashboardCard: DashboardCardViewModel;
}

export const ViewModelContext = createContext<ViewModel>({
  dashboardCard: DashboardCardViewModelFactory(),
});

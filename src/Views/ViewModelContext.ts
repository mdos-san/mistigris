import { createContext } from "react";
import DashboardCardViewModelFactory, {
  DashboardCardViewModel,
} from "../ViewModels/DashboardCardViewModel";
import AuthViewModelFactory, {
  AuthViewModel,
} from "../ViewModels/AuthViewModel";

interface ViewModel {
  dashboardCard: DashboardCardViewModel;
  auth: AuthViewModel;
}

export const ViewModelContext = createContext<ViewModel>({
  dashboardCard: DashboardCardViewModelFactory(),
  auth: AuthViewModelFactory(),
});

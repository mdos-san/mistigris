import { createContext } from "react";
import DashboardCardViewModelFactory, {
  DashboardCardViewModel,
} from "../ViewModels/DashboardCardViewModel";
import AuthViewModelFactory, {
  AuthViewModel,
} from "../ViewModels/AuthViewModel";
import FamilyViewModelFactory, {
  FamilyViewModel,
} from "../ViewModels/FamilyViewModel";

interface ViewModel {
  dashboardCard: DashboardCardViewModel;
  auth: AuthViewModel;
  family: FamilyViewModel;
}

export const ViewModelContext = createContext<ViewModel>({
  dashboardCard: DashboardCardViewModelFactory(),
  auth: AuthViewModelFactory(),
  family: FamilyViewModelFactory(),
});

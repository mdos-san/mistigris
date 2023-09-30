import AlertCard from "./alert-card";
import CatCard from "./cat-card";
import FamilyCard from "./family-card";
import useSubject from "../hooks/useSubject";
import { AdminDashboardViewModel } from "./view-model";

function AdminDashboardViewFactory(vm: AdminDashboardViewModel) {
  return function () {
    const cardSelected = useSubject(vm.cardSelectorSubject, "none");

    return (
      <div className={`dashboard dashboard--${cardSelected}`}>
        <FamilyCard isSelected={cardSelected === "family"} />
        <CatCard isSelected={cardSelected === "cat"} />
        <AlertCard isSelected={cardSelected === "alert"} />
      </div>
    );
  };
}

export default AdminDashboardViewFactory;

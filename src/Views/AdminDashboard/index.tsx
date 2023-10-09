import AlertCard from "./alert-card";
import CatCard from "./cat-card";
import FamilyCard from "./family-card";
import useSubject from "../hooks/useSubject";
import { useContext } from "react";
import { ViewModelContext } from "../../ViewModels/ViewModelContext";

function AdminDashboard() {
  const { dashboardCard } = useContext(ViewModelContext);
  const cardSelected = useSubject(dashboardCard.cardSelectorSubject, "none");

  return (
    <div className={`dashboard dashboard--${cardSelected}`}>
      <FamilyCard isSelected={cardSelected === "family"} />
      <CatCard isSelected={cardSelected === "cat"} />
      <AlertCard isSelected={cardSelected === "alert"} />
    </div>
  );
}

export default AdminDashboard;

import AlertCard from "./alert-card";
import CatCard from "./cat-card";
import FamilyCard from "./family-card";
import useSubject from "../../hooks/useSubject";
import DashboardCard from "../../DashboardCard";

function AdminDashboardPage() {
  const selectedDashboardCard = useSubject(DashboardCard.model.get(), "none");

  return (
    <div className={`dashboard dashboard--${selectedDashboardCard}`}>
      <FamilyCard isSelected={selectedDashboardCard === "family"} />
      <CatCard isSelected={selectedDashboardCard === "cat"} />
      <AlertCard isSelected={selectedDashboardCard === "alert"} />
    </div>
  );
}

export default AdminDashboardPage;

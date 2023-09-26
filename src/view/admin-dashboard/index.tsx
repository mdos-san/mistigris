import AlertCard from "./alert-card";
import CatCard from "./cat-card";
import FamilyCard from "./family-card";
import DashboardCardSelector from "../../model/DashboardCardSelector";
import useSubject from "../../hooks/useSubject";

function AdminDashboardPage() {
  const selectedDashboardCard = useSubject(DashboardCardSelector.get(), "none");

  return <div className={`dashboard dashboard--${selectedDashboardCard}`}>
    <FamilyCard isSelected={selectedDashboardCard === "family"} />
    <CatCard isSelected={selectedDashboardCard === "cat"} />
    <AlertCard isSelected={selectedDashboardCard === "alert"} />
  </div>
}

export default AdminDashboardPage;

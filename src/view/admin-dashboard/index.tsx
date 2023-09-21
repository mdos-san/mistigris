import AlertCard from "./alert-card";
import CatCard from "./cat-card";
import FamilyCard from "./family-card";

function AdminDashboardPage() {
  return <div className="dashboard">
    <FamilyCard />
    <CatCard />
    <AlertCard />
  </div>
}

export default AdminDashboardPage;

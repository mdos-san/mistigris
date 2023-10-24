import AlertCard from "./alert-card";
import CatCard from "./cat-card";
import FamilyCard from "./family-card";

function AdminDashboard() {
  return (
    <div className={`dashboard dashboard--none`}>
      <FamilyCard isSelected={true} />
      <CatCard isSelected={false} />
      <AlertCard isSelected={false} />
    </div>
  );
}

export default AdminDashboard;

interface DashboardElementProps {
  title: string;
  type: "square" | "row";
  position: "left" | "middle" | "right" | "bottom";
  isSelected: boolean;
  onClick: () => void;
}

function DashboardElement({ isSelected, type, title, onClick, position }: DashboardElementProps) {
  const className = `dashboard__element dashboard__element--type-${type} dashboard__element--position-${position} ${isSelected ? "dashboard__element--selected" : "dashboard__element--not-selected"}`;

  return <div className={className} onClick={onClick}>
    <h3>{title}</h3>
    <div className={`dashboard__element__preview ${isSelected ? "transition-delay--0" : ""}`}>
      <p>KPI #1</p>
      <p>KPI #2</p>
      <p>KPI #3</p>
    </div>
    <div className={`dashboard__element__content ${!isSelected ? "transition-delay--0" : ""}`}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>


}

export default DashboardElement;

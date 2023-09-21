interface DashboardElementProps {
  title: string;
  type: "square" | "row";
  position: "left" | "middle" | "right" | "bottom";
  isSelected: boolean;
  onClick: () => void;
  preview: JSX.Element;
  content: JSX.Element;
}

function DashboardElement({ isSelected, type, title, onClick, position, preview, content }: DashboardElementProps) {
  const className = `dashboard__element dashboard__element--type-${type} dashboard__element--position-${position} ${isSelected ? "dashboard__element--selected" : "dashboard__element--not-selected"}`;

  return <div className={className} onClick={onClick}>
    <h3>{title}</h3>
    <div className={`dashboard__element__preview ${isSelected ? "transition-delay--0" : ""}`}>
      { preview }
    </div>
    <div className={`dashboard__element__content ${!isSelected ? "transition-delay--0" : ""}`}>
      { content }
    </div>
  </div>
}

export default DashboardElement;

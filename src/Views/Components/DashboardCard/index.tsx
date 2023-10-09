import { useContext } from "react";
import Close from "../Close";
import { PossibleCardSelection } from "../../../Models/CardSelector";
import { ViewModelContext } from "../../../ViewModels/ViewModelContext";

interface DashboardElementProps {
  content: JSX.Element;
  isSelected: boolean;
  onClick: () => PossibleCardSelection;
  onCloseModal: () => PossibleCardSelection;
  position: "left" | "middle" | "right" | "bottom";
  preview: JSX.Element;
  title: string;
  type: "square" | "row";
}

function DashboardCard({
  isSelected,
  type,
  title,
  onClick,
  position,
  preview,
  content,
  onCloseModal,
}: DashboardElementProps) {
  const { dashboardCard } = useContext(ViewModelContext);
  const className = `dashboard__element dashboard__element--type-${type} dashboard__element--position-${position} ${
    isSelected
      ? "dashboard__element--selected"
      : "dashboard__element--not-selected"
  }`;

  return (
    <div
      className={className}
      onClick={() => {
        const newValue = onClick();
        dashboardCard.cardSelectorSubject.next(newValue);
      }}
    >
      <h2 className="dashboard__element__title">{title}</h2>
      <Close
        onClose={() => {
          const newValue = onCloseModal();
          dashboardCard.cardSelectorSubject.next(newValue);
        }}
      />
      <div
        className={`dashboard__element__preview ${
          isSelected ? "transition-delay--0" : ""
        }`}
      >
        {preview}
      </div>
      <div
        className={`dashboard__element__content ${
          !isSelected ? "transition-delay--0" : ""
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default DashboardCard;

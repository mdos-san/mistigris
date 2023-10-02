import { PossibleCardSelection } from "../../logic/CardSelector";
import Close from "../Close";
import { DashboardCardViewModel } from "./view-model";

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

function DashboardCardViewFactory(vm: DashboardCardViewModel) {
  return function ({
    isSelected,
    type,
    title,
    onClick,
    position,
    preview,
    content,
    onCloseModal,
  }: DashboardElementProps) {
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
          vm.cardSelectorSubject.next(newValue);
        }}
      >
        <h2 className="dashboard__element__title">{title}</h2>
        <Close
          onClose={() => {
            const newValue = onCloseModal();
            vm.cardSelectorSubject.next(newValue);
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
  };
}

export default DashboardCardViewFactory;

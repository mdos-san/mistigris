import { X } from "react-feather";

interface Props {
  onClose: () => void;
}

function Close({ onClose }: Props) {
  return (
    <span
      className="close"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <X />
    </span>
  );
}

export default Close;

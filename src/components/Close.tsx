import DashboardCardSelector from "../model/DashboardCardSelector";

function Close() {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        DashboardCardSelector.set("none");
      }}
    >
      Close
    </button>
  );
}

export default Close;

import { Subject } from "rxjs";

function DashboardCardSelectorFactory() {
  let value = new Subject<string>();

  return {
    set: (newValue: string) => value.next(newValue),
    get: () => value,
  };
}

export default DashboardCardSelectorFactory();

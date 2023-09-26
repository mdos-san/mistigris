import { useEffect, useState } from "react";
import { Subject } from "rxjs";

function useSubject<T>(subject: Subject<T>, defaultValue: T) {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    subject.subscribe({
      next: (v) => setValue(v),
    });
  }, []);

  return value;
}

export default useSubject;

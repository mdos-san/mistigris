import { useEffect, useState } from "react";
import { Subject } from "rxjs";

function useSubject<T>(subject: Subject<T>, defaultValue: T) {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const subscription = subject.subscribe({
      next: (v) => setValue(v),
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [subject]);

  return value;
}

export default useSubject;

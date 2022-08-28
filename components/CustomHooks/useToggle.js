import { useState } from "react";

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (value) => {
    console.log(typeof value);
    console.log(value);

    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  };

  return [value, toggleValue];
}

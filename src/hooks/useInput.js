import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [value, setValue] = useState(defaultValue);
  const [edit, setEdit] = useState(false);

  const valueIsValid = validationFn(value);

  function handleChange(event) {
    setValue(event.target.value);
    setEdit(false);
  }

  function handleInputBlur() {
    setEdit(true);
  }

  return {
    value,
    handleChange,
    handleInputBlur,
    hasError: edit && !valueIsValid,
  };
}

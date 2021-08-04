import { useState, useEffect } from "react";

const useValidate = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState();
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const error = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const onBlurHandler = (e) => {
    setIsTouched(true);
  };
  return {
    value: enteredValue,
    isValid: valueIsValid,
    valueChangeHandler,
    onBlurHandler,
    error,
  };
};

export default useValidate;

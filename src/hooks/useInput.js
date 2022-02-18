import React, { useState, useCallback } from "react";


const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    const { target } = e;
    const targetValue =
      target.type === "checkbox" ? target.checked : target.value;
    setValue(targetValue);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
import React, {useState} from "react";

const useFlip = (initialValue = true) => {
  const [isFacingUp, setIsFacingUp] = useState(initialValue);
  const flip = () => {
    setIsFacingUp(isFacingUp => !isFacingUp);
  };

  return [isFacingUp, flip];
};

export default useFlip;
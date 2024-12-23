import { useState } from "react";

export const usePermissions = () => {
  const [isValid, setIsValid] = useState<boolean>(false);
  return isValid;
};

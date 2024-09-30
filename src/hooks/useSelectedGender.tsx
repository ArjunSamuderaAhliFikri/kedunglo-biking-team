import { useState } from "react";

export function useSelectedGender() {
  const [selectedGender, setSelectedGender] = useState<string>("");

  function handleChangeSelected(value: string): void {
    setSelectedGender(value);
  }

  return { selectedGender, handleChangeSelected };
}

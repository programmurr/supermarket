import { AddProps, BasketContextType } from "../types";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

export default function Add({ product }: AddProps) {
  const { handleIncreaseClick } = useContext(
    BasketContext
  ) as BasketContextType;

  return <button onClick={() => handleIncreaseClick(product)}>Add</button>;
}

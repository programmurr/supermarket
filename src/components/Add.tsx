import { AddProps, BasketContextType } from "../types";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { Button } from "../styles/Add";

export default function Add({ product }: AddProps) {
  const { handleIncreaseClick } = useContext(
    BasketContext
  ) as BasketContextType;

  return <Button onClick={() => handleIncreaseClick(product)}>Add</Button>;
}

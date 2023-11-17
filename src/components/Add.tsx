import { AddProps } from "../types";

export default function Add({ product, handleAddClick }: AddProps) {
  return <button onClick={() => handleAddClick(product)}>Add</button>;
}

import { Dispatch, SetStateAction } from "react";

export type Product = {
  description: string;
  id: number;
  name: string;
  price: number;
};

export type ProductListProps = {
  products: Product[];
  errorMessage: string;
  handleAddClick: (product: Product) => void;
};

export type ProductDetailProps = {
  products: Product[];
  handleAddClick: (product: Product) => void;
};

export type AddProps = {
  product: Product;
  handleAddClick: (product: Product) => void;
};

export type BasketType = Product[];

export type BasketProps = {
  basket: BasketType;
  setBasket: Dispatch<SetStateAction<BasketType>>;
};

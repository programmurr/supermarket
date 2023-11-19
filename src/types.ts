import { Dispatch, SetStateAction, ReactNode } from "react";
import { Dictionary } from "lodash";

export type Product = {
  description: string;
  id: number;
  name: string;
  price: number;
};

export type ProductListProps = {
  products: Product[];
  errorMessage: string;
};

export type ProductDetailProps = {
  products: Product[];
};

export type AddProps = {
  product: Product;
};

export type BasketType = Product[];

export type BasketProps = {
  basket: BasketType;
  setBasket: Dispatch<SetStateAction<BasketType>>;
};

export type BasketContextType = {
  basket: Product[];
  groupedItems: Dictionary<Product[]>;
  roundedTotal: string;
  handleDecreaseClick: (item: Product) => void;
  handleIncreaseClick: (item: Product) => void;
};

export type BasketProviderType = {
  children: ReactNode;
};

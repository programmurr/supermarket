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

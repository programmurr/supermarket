export type Product = {
  description: string;
  id: number;
  name: string;
  price: number;
};

export type ProductListProps = {
  products: Product[];
};

export type ProductDetailProps = {
  product: Product;
};

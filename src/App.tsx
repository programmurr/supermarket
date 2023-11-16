import React, { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

const productEndpoint =
  "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(productEndpoint);
        const data: Product[] = await response.json();
        setProducts(data);
        setErrorMessage("");
      } catch (error) {
        setProducts([]);
        setErrorMessage("Error fetching products");
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      {errorMessage && <p>{errorMessage}</p>}
      <ProductList products={products} />
    </div>
  );
}

export default App;

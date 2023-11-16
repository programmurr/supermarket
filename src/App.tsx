import React, { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types";

const productEndpoint =
  " https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(productEndpoint);
      const data: Product[] = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <ul>
        {products.map((product) => (
          <li>
            <p>{product.name}</p>
            <p>£{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

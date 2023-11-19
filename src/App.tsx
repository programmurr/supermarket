import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Product } from "./types";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import ProductDetail from "./components/ProductDetail";
import Error from "./components/Error";
import { BasketProvider } from "./context/BasketContext";

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
      <BasketProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route
              index
              element={
                <ProductList products={products} errorMessage={errorMessage} />
              }
            />
            <Route
              path="products/:id"
              element={<ProductDetail products={products} />}
            />
            <Route path="basket" element={<Basket />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BasketProvider>
    </div>
  );
}

export default App;

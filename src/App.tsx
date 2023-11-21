import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Product } from "./types";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import ProductDetail from "./components/ProductDetail";
import Error from "./components/Error";
import { BasketProvider } from "./context/BasketContext";
import * as S from "./styles/App";

const productEndpoint =
  "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect used to sync the App with an external data source.
  useEffect(() => {
    // Active flag used to prevent race conditions in data fetching
    let active = true;
    async function fetchProducts() {
      // try / catch and async/ await used as I find the syntax tidier
      try {
        const response = await fetch(productEndpoint);
        const data: Product[] = await response.json();
        if (active) {
          setProducts(data);
          setErrorMessage("");
        }
      } catch (error) {
        setProducts([]);
        setErrorMessage("Error fetching products");
      }
    }
    fetchProducts();
    return () => {
      active = false;
    };
  }, []);

  return (
    <S.App>
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
    </S.App>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Product, BasketType } from "./types";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import ProductDetail from "./components/ProductDetail";
import Error from "./components/Error";

const productEndpoint =
  "https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json";

function App() {
  const [basket, setBasket] = useState<BasketType>([]);

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

  function handleAddClick(product: Product) {
    setBasket((oldBasket) => {
      return [...oldBasket, product];
    });
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <ProductList
                products={products}
                errorMessage={errorMessage}
                handleAddClick={handleAddClick}
              />
            }
          />
          <Route
            path="products/:id"
            element={
              <ProductDetail
                products={products}
                handleAddClick={handleAddClick}
              />
            }
          />
          <Route path="basket" element={<Basket basket={basket} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

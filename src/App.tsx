import React, { useEffect } from "react";
import "./App.css";

const productEndpoint =
  " https://s3.eu-west-2.amazonaws.com/techassessment.cognitoedu.org/products.json";

function App() {
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(productEndpoint);
      const data = await response.json();
      console.log(data);
    }
    fetchProducts();
  }, []);

  return <div className="App"></div>;
}

export default App;

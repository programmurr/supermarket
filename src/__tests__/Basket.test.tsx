import React from "react";
import { render, screen } from "@testing-library/react";
import Basket from "../components/Basket";
import { BasketProvider } from "../context/BasketContext";

describe("Basket", () => {
  it("Displays empty basket message if there are no items", () => {
    render(
      <BasketProvider>
        <Basket />
      </BasketProvider>
    );
    expect(
      screen.getByText(/There is nothing in your basket/)
    ).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Basket from "../components/Basket";
import { BasketProvider } from "../context/BasketContext";

function customRender() {
  return render(
    <BasketProvider>
      <Basket />
    </BasketProvider>,
    { wrapper: BrowserRouter }
  );
}

describe("Basket", () => {
  it("Displays all items in the basket", () => {
    customRender();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByText(/Test Item 1/i)).toBeVisible();
    expect(screen.getByText(/Test Item 2/i)).toBeVisible();
  });

  it("Correctly displays item quantity", () => {
    customRender();
    const basketItems = screen.getAllByRole("listitem");
    expect(basketItems[0]).toHaveTextContent(/Quantity: 1/i);
    expect(basketItems[1]).toHaveTextContent(/Quantity: 2/i);
  });

  it("Increases item quantity correctly", async () => {
    const user = userEvent.setup();
    customRender();
    const oldBasketItems = screen.getAllByRole("listitem");
    const itemTwoIncrease = screen.getAllByRole("button", {
      name: "+",
    })[1];
    expect(oldBasketItems[1]).toHaveTextContent(/Quantity: 2/i);
    await user.click(itemTwoIncrease);
    const newBasketItems = await screen.findAllByRole("listitem");
    expect(newBasketItems[1]).toHaveTextContent(/Quantity: 3/i);
  });

  it("Decreases item quantity correctly", async () => {
    const user = userEvent.setup();
    customRender();
    const oldBasketItems = screen.getAllByRole("listitem");
    const itemTwoDecrease = screen.getAllByRole("button", {
      name: "-",
    })[1];
    expect(oldBasketItems[1]).toHaveTextContent(/Quantity: 2/i);
    await user.click(itemTwoDecrease);
    const newBasketItems = await screen.findAllByRole("listitem");
    expect(newBasketItems[1]).toHaveTextContent(/Quantity: 1/i);
  });

  it("Removes items when the quantity reaches zero", async () => {
    const user = userEvent.setup();
    customRender();
    const itemOneDecrease = screen.getAllByRole("button", {
      name: "-",
    })[0];
    await user.click(itemOneDecrease);
    const newBasketItems = await screen.findAllByRole("listitem");
    expect(newBasketItems).toHaveLength(1);
  });

  it("Displays a message when there are no items in the basket", async () => {
    const user = userEvent.setup();
    customRender();
    const itemOneDecrease = screen.getByTestId("decrease-button-1");
    await user.click(itemOneDecrease);
    await user.click(itemOneDecrease);
    const itemTwoDecrease = screen.getByTestId("decrease-button-0");
    await user.click(itemTwoDecrease);
    const newBasketItems = screen.queryAllByRole("listitem");
    expect(newBasketItems).toHaveLength(0);
    expect(screen.getByText(/There is nothing in your basket/i)).toBeVisible();
  });
});

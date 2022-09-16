import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ShoppingCart from "../index";

describe("Shopping Cart", () => {
  test("should show shopping cart page", () => {
    const { getByText } = render(<ShoppingCart />);

    expect(getByText("Shopping Cart")).toBeInTheDocument();
  });

  test("should show empty shopping cart, given product list is empty", () => {
    const { container, getByText } = render(<ShoppingCart />);
    const products = container.getElementsByClassName("product");

    expect(products).toHaveLength(0);
    expect(getByText("商品名称")).toBeInTheDocument();
    expect(getByText("数量")).toBeInTheDocument();
    expect(getByText("单价")).toBeInTheDocument();
  });
});

import { render, waitFor, getByText } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import ShoppingCart from "../index";
import { getProducts } from "../../../service";

jest.mock("../../../service");

describe("Shopping Cart", () => {
  test("should show shopping cart page", () => {
    getProducts.mockResolvedValue([]);
    const { getByText } = render(<ShoppingCart />);

    expect(getByText("Shopping Cart")).toBeInTheDocument();
  });

  test("should show empty shopping cart, given product list is empty", () => {
    getProducts.mockResolvedValue([]);
    const { container, getByText } = render(<ShoppingCart />);
    const products = container.getElementsByClassName("product");

    expect(products).toHaveLength(0);
    expect(getByText("商品名称")).toBeInTheDocument();
    expect(getByText("数量")).toBeInTheDocument();
    expect(getByText("单价")).toBeInTheDocument();
  });

  test("should show product list in shopping cart page, given product is not empty", async () => {
    const mockProducts = [
      { id: 1, name: "小米手环", price: 299, count: 1 },
      { id: 2, name: "任天堂 Nintendo Switch", price: 2099, count: 2 },
      {
        id: 3,
        name: "SONY WH-1000XM4 无线智能降噪耳机",
        price: 2099,
        count: 1,
      },
      { id: 4, name: "iPhone 13 256GB", price: 6799, count: 1 },
    ];
    getProducts.mockResolvedValue(mockProducts);
    const { container } = render(<ShoppingCart />);

    await waitFor(() => {
      const products = Array.from(container.getElementsByClassName("product"));
      expect(products).toHaveLength(mockProducts.length);
      products.forEach((product, i) => {
        expect(getByText(product, mockProducts[i].name)).toBeInTheDocument();
        expect(getByText(product, mockProducts[i].price)).toBeInTheDocument();
        expect(getByText(product, mockProducts[i].count)).toBeInTheDocument();
      });
    });
  });
});

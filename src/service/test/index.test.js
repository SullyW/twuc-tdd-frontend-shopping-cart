import { getProducts } from "../index";
import { getData } from "../../http/http";
import mockProducts from "../../mockData/products.json";
jest.mock("../../http/http");

describe("service", () => {
  describe("getProducts", () => {
    it("should return products", async () => {
      getData.mockResolvedValue({ products: mockProducts });

      const actual = await getProducts();

      expect(actual).toEqual(mockProducts);
    });
  });
});

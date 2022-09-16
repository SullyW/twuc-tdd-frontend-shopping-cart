import axios from "axios";
import { getData } from "../http";
import mockProducts from "../../mockData/products.json";
jest.mock("axios");

describe("http", () => {
  describe("getData", () => {
    it("should send request and return data", async () => {
      const mockData = {
        products: mockProducts,
      };
      axios.get.mockResolvedValue({ data: mockData });

      const actual = await getData();

      expect(axios.get).toBeCalledWith("http://localhost:8000/");
      expect(actual).toEqual(mockData);
    });
  });
});

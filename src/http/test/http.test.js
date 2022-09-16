import axios from "axios";
import { getData } from "../http";
jest.mock("axios");

describe("http", () => {
  describe("getData", () => {
    it("should send request and return data", async () => {
      const mockData = {
        products: [
          { id: 1, name: "小米手环", price: 299, count: 1 },
          { id: 2, name: "任天堂 Nintendo Switch", price: 2099, count: 2 },
          {
            id: 3,
            name: "SONY WH-1000XM4 无线智能降噪耳机",
            price: 2099,
            count: 1,
          },
          { id: 4, name: "iPhone 13 256GB", price: 6799, count: 1 },
        ],
      };
      axios.get.mockResolvedValue({ data: mockData });

      const actual = await getData();

      expect(axios.get).toBeCalledWith("http://localhost:8000/");
      expect(actual).toEqual(mockData);
    });
  });
});

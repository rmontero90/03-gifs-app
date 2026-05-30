import { describe, test, expect } from "vitest";
import { giphyApi } from "./giphy.api";

describe("giphyApi", () => {
  test("should be configured correctly", () => {
    expect(giphyApi.defaults.baseURL).toBe("https://api.giphy.com/v1/gifs");
    expect(giphyApi.defaults.params.lang).toBe("en");
    expect(giphyApi.defaults.params.api_key).toBe(
      import.meta.env.VITE_GIPHY_API_KEY,
    );
  });
});

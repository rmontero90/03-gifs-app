import { beforeEach, describe, expect, test, vi } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query-action";

import AxiosMockAdapter from "axios-mock-adapter";
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "../../tests/mocks/gifs.response.data";

describe("getGifsByQuery", async () => {
  let mock = new AxiosMockAdapter(giphyApi);

  beforeEach(() => {
    // mock.reset();
    mock = new AxiosMockAdapter(giphyApi);
  });

  test("should return a list of gifs", async () => {
    mock.onGet("/search").reply(200, giphySearchResponseMock);

    const gifs = await getGifsByQuery("goku");

    expect(gifs.length).toBe(25);

    gifs.forEach((gif) => {
      expect(typeof gif.id).toBe("string");
      expect(typeof gif.title).toBe("string");
      expect(typeof gif.url).toBe("string");
      expect(typeof gif.width).toBe("number");
      expect(typeof gif.height).toBe("number");
    });
  });

  test("should return an empty list if the API returns an empty array", async () => {
    mock.restore();
    const gifs = await getGifsByQuery("");
    expect(gifs.length).toBe(0);
  });

  test("should handle error when the API returns an error", async () => {
    const consoleErrorSpy = vi.spyOn(console, "error");

    mock.onGet("/search").reply(400, {
      data: { message: "Bad Request" },
    });

    const gifs = await getGifsByQuery("goku");

    expect(gifs.length).toBe(0);
    expect(consoleErrorSpy).toHaveBeenCalled();
  });
});

import { describe, test, expect, vi } from "vitest";
import { useGifs } from "./useGifs";
import { renderHook } from "@testing-library/react";
import { act } from "react";
import * as gifActions from "../actions/get-gifs-by-query-action";

describe("useGifs", () => {
  test("should return default values and methods", async () => {
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerm.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermClicked).toBeDefined();
  });

  test("should return a list of gifs", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch("goku");
    });
    expect(result.current.gifs.length).toBe(10);
  });

  test("should return a list of gifs when handledTermClicked is called", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClicked("goku");
    });
    expect(result.current.gifs.length).toBe(10);
  });

  test("should return a list of gifs from cache", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClicked("saitama");
    });
    vi.spyOn(gifActions, "getGifsByQuery").mockRejectedValue(
      new Error("This is a custom error"),
    );

    expect(result.current.gifs.length).toBe(10);
  });

  test("should return no more than 7 previous items", async () => {
    const { result } = renderHook(() => useGifs());

    vi.spyOn(gifActions, "getGifsByQuery").mockResolvedValue([]);

    await act(async () => {
      await result.current.handleSearch("vegeta");
    });
    await act(async () => {
      await result.current.handleSearch("gohan");
    });
    await act(async () => {
      await result.current.handleSearch("piccolo");
    });
    await act(async () => {
      await result.current.handleSearch("saitama");
    });
    await act(async () => {
      await result.current.handleSearch("freezer");
    });
    await act(async () => {
      await result.current.handleSearch("light");
    });
    await act(async () => {
      await result.current.handleSearch("zero");
    });
    await act(async () => {
      await result.current.handleSearch("kallen");
    });

    console.log(result.current.previousTerm);

    expect(result.current.previousTerm.length).toBe(7);
    expect(result.current.previousTerm).toStrictEqual([
      "kallen",
      "zero",
      "light",
      "freezer",
      "saitama",
      "piccolo",
      "gohan",
    ]);
  });
});

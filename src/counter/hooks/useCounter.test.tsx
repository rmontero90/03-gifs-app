import { describe, test, expect } from "vitest";
import { useCounter } from "./useCounter";
import { renderHook, act } from "@testing-library/react";

describe("useCounter", () => {
  test("should initialize the counter with defaultvalue 5", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(5);
  });

  test("should increment the counter", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(6);
  });

  test("should decrement the counter", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(4);
  });

  test("should reset the counter to initial value", () => {
    const { result } = renderHook(() => useCounter(10));

    act(() => {
      result.current.handleAdd();
      result.current.handleAdd();
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(10);
  });
});

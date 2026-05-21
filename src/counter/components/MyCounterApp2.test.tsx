import { fireEvent, render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { test, vi, expect } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

const handleAddMock = vi.fn();
const handleSubstractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock("../hooks/useCounter", () => ({
  useCounter: () => ({
    counter: 40,
    handleAdd: handleAddMock,
    handleReset: handleSubstractMock,
    handleSubstract: handleResetMock,
  }),
}));

describe("MyCounterApp", () => {
  test("should render the component", () => {
    render(<MyCounterApp />);

    expect(screen.getByRole("button", { name: "Increment" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Decrement" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
  });

  test("should call handleAdd if button is clicked", () => {
    render(<MyCounterApp />);

    const button = screen.getByRole("button", { name: "Increment" });

    fireEvent.click(button);

    expect(handleAddMock).toHaveBeenCalled();
    expect(handleSubstractMock).not.toHaveBeenCalled();
    expect(handleResetMock).not.toHaveBeenCalled();
  });
});

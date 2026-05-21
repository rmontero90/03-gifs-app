import { fireEvent, render, screen } from "@testing-library/react";
import { MyCounterApp } from "./MyCounterApp";
import { describe, test, expect } from "vitest";

describe("MyCounterApp", () => {
  test("should render the MyCounterApp component", () => {
    render(<MyCounterApp />);

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      `Counter: 10`,
    );

    expect(screen.getByRole("button", { name: "Increment" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Decrement" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
  });

  test("should increment the counter", () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole("heading", { level: 1 });
    const button = screen.getByRole("button", { name: "Increment" });

    fireEvent.click(button);

    expect(labelH1.innerHTML).toContain("Counter: 11");
  });
});

import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
  test("should render the CustomHeader component with title and description", () => {
    const title = "Test Title";
    const description = "Test Description";
    render(<CustomHeader title={title} description={description} />);

    expect(screen.getByText(title)).toBeDefined();
    expect(screen.getByText(description)).toBeDefined();
  });
});

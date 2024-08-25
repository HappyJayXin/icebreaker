import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import InputText from "@/app/components/InputText";

describe("InputText", () => {
  test("renders the InputText component", () => {
    render(<InputText placeholder="Type here..." ariaLabel="input" />);
    const inputElement = screen.getByPlaceholderText("Type here...");
    expect(inputElement).toBeInTheDocument();
  });
});

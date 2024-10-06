import { useRef } from "react";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import InputText from "@/app/components/InputText";

describe("InputText", () => {
  test("should render the InputText component", () => {
    render(<InputText placeholder="Type here..." ariaLabel="input" />);
    const inputElement = screen.getByPlaceholderText("Type here...");

    expect(inputElement).toBeInTheDocument();
  });

  test("should update value on input change", () => {
    render(<InputText placeholder="Type here..." ariaLabel="input" />);
    const inputElement = screen.getByPlaceholderText("Type here...");

    fireEvent.change(inputElement, { target: { value: "Hello" } });
    expect(inputElement.value).toBe("Hello");
  });

  test("should call onSubmit when Enter is pressed", () => {
    const handleSubmit = vi.fn();
    render(<InputText onSubmit={handleSubmit} placeholder="Type here..." ariaLabel="input" />);
    const inputElement = screen.getByPlaceholderText("Type here...");

    fireEvent.change(inputElement, { target: { value: "Hello" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(handleSubmit).toHaveBeenCalledWith("Hello");
  });

  test("should not call onSubmit when Enter is pressed with empty input", () => {
    const handleSubmit = vi.fn();
    render(<InputText onSubmit={handleSubmit} placeholder="Type here..." ariaLabel="input" />);
    const inputElement = screen.getByPlaceholderText("Type here...");

    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test("should clear input when clear button is clicked", () => {
    render(<InputText placeholder="Type here..." ariaLabel="input" />);
    const inputElement = screen.getByPlaceholderText("Type here...");

    fireEvent.change(inputElement, { target: { value: "Hello" } });
    const clearButton = screen.getByRole("button", { name: /close/i });

    fireEvent.click(clearButton);
    expect(inputElement.value).toBe("");
  });

  test("should call onSubmit when search button is clicked", () => {
    const handleSubmit = vi.fn();
    render(<InputText onSubmit={handleSubmit} placeholder="Type here..." isSearch />);
    const inputElement = screen.getByPlaceholderText("Type here...");

    fireEvent.change(inputElement, { target: { value: "Hello" } });
    const searchButton = screen.getByRole("button", { name: /search/i });

    fireEvent.click(searchButton);
    expect(handleSubmit).toHaveBeenCalledWith("Hello");
  });

  test("should not call onSubmit when search button is clicked with empty input", () => {
    const handleSubmit = vi.fn();
    render(<InputText onSubmit={handleSubmit} placeholder="Type here..." isSearch />);

    const searchButton = screen.getByRole("button", { name: /search/i });
    fireEvent.click(searchButton);

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test("should set value using ref", () => {
    const TestComponent = () => {
      const inputRef = useRef(null);
      return (
        <>
          <InputText ref={inputRef} placeholder="Type here..." ariaLabel="input" />
          <button onClick={() => inputRef.current.setValue("Updated value")}>Set Value</button>
        </>
      );
    };
    render(<TestComponent />);
    const inputElement = screen.getByPlaceholderText("Type here...");
    const setValueButton = screen.getByText("Set Value");
    fireEvent.click(setValueButton);
    expect(inputElement.value).toBe("Updated value");
  });
});

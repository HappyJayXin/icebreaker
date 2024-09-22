import { vi } from "vitest";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Toast from "@/app/components/Toast";
import toastReducer from "@/app/components/Toast/toastSlice";
import { ALERT_TYPES } from "@/app/components/Toast/data";

vi.mock("@/app/i18n/client", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

const createMockStore = (initialState) => {
  return configureStore({
    reducer: {
      toast: toastReducer,
    },
    preloadedState: {
      toast: initialState,
    },
  });
};

describe("Toast", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  test("should render nothing when not visible", () => {
    const store = createMockStore({ visible: false, message: "", type: ALERT_TYPES.error });
    render(
      <Provider store={store}>
        <Toast lng="en" />
      </Provider>
    );
    expect(screen.queryByLabelText("error-icon")).toBeNull();
  });

  test("should render the toast with correct message and type", () => {
    const store = createMockStore({
      visible: true,
      message: "Test message",
      type: ALERT_TYPES.success,
    });
    render(
      <Provider store={store}>
        <Toast lng="en" />
      </Provider>
    );
    const alert = screen.getByLabelText("alert-message");
    expect(alert).toHaveTextContent("Test message");
  });

  test("should render the correct icon based on type", () => {
    const store = createMockStore({ visible: true, message: "Test", type: ALERT_TYPES.error });
    render(
      <Provider store={store}>
        <Toast lng="en" />
      </Provider>
    );
    expect(screen.getByLabelText("error-icon")).toBeInTheDocument();
  });

  test("should hide the toast after 5 seconds", async () => {
    vi.useFakeTimers();
    const store = createMockStore({ visible: true, message: "Test", type: ALERT_TYPES.error });
    render(
      <Provider store={store}>
        <Toast lng="en" />
      </Provider>
    );
    expect(screen.getByLabelText("error-icon")).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.queryByLabelText("error-icon")).toBeNull();
  });

  test("should hide the toast when close button is clicked", () => {
    const store = createMockStore({ visible: true, message: "Test", type: ALERT_TYPES.error });
    render(
      <Provider store={store}>
        <Toast lng="en" />
      </Provider>
    );
    const closeButton = screen.getByRole("button", { name: "✕" });
    fireEvent.click(closeButton);
    expect(screen.queryByLabelText("error-icon")).toBeNull();
  });

  test("should apply the correct CSS classes based on type", () => {
    const types = Object.values(ALERT_TYPES);
    types.forEach((type) => {
      const store = createMockStore({ visible: true, message: "Test", type });
      const { unmount, container } = render(
        <Provider store={store}>
          <Toast lng="en" />
        </Provider>
      );
      const toastElement = container.querySelector(`.alert-${type}`);
      expect(toastElement).toBeInTheDocument();
      expect(screen.getByLabelText(`${type}-icon`)).toBeInTheDocument();
      unmount();
    });
  });
});

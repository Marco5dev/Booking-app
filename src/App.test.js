import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Booking form via App routing", () => {
  test("renders booking form when navigating to /reservations", () => {
    window.history.pushState({}, "Reservations Page", "/reservations");
    render(<App />);

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /make your reservation/i })
    ).toBeInTheDocument();
  });

  test("can fill out and submit the booking form", () => {
    window.history.pushState({}, "Reservations Page", "/reservations");
    render(<App />);

    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitBtn = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    fireEvent.change(dateInput, { target: { value: "2025-09-15" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

    fireEvent.click(submitBtn);

    expect(submitBtn).toBeInTheDocument();
  });

  test("date input should only allow selecting dates starting from tomorrow", () => {
    window.history.pushState({}, "Reservations Page", "/reservations");
    render(<App />);

    const dateInput = screen.getByLabelText(/choose date/i);

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const expectedMin = tomorrow.toISOString().split("T")[0];

    expect(dateInput).toHaveAttribute("min", expectedMin);
  });
});

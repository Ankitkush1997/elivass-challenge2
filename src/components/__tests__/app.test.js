import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "../../App";
import fetchMock from "jest-fetch-mock";
import "@testing-library/jest-dom/extend-expect";

beforeAll(() => {
  fetchMock.enableMocks();
});

afterEach(() => {
  fetchMock.resetMocks();
});

describe("App", () => {
  test("renders spinner while loading users", () => {
    fetchMock.mockResponse(JSON.stringify([]));
    render(<App />);
    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("renders 'No users found' when no users are available", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([]),
    });

    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByTestId("spinner"), {
      timeout: 5000,
    });

    const noUsersElement = screen.getByText("No users found.");
    expect(noUsersElement).toBeInTheDocument();

    global.fetch.mockRestore();
  });
});

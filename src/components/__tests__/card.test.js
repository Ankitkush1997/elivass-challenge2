import React from "react";
import { render, screen } from "@testing-library/react";
import CustomCard from "../card/card";
import "@testing-library/jest-dom/extend-expect";
describe("CustomCard", () => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    address: {
      street: "123 Main St",
      suite: "Apt 4B",
      city: "New York",
      zipcode: "10001",
    },
    website: "example.com",
    company: {
      name: "ABC Company",
    },
    username: "johndoe",
  };

  test("renders user information correctly", () => {
    render(<CustomCard user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
    expect(screen.getByText(user.phone)).toBeInTheDocument();
    expect(screen.getByText(user.company.name)).toBeInTheDocument();
    expect(screen.getByText(user.website)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${user.address.street}${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`
      )
    ).toBeInTheDocument();
  });

  test("renders user image with correct alt text", () => {
    render(<CustomCard user={user} />);

    const userImage = screen.getByAltText("example");
    expect(userImage).toHaveAttribute("alt", "example");
    expect(userImage.src).toContain(user.username);
  });
});

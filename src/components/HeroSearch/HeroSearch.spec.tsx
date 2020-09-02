import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import HeroSearch from ".";
import { Hero } from "../../models/hero";

describe("HeroSearch", () => {
  let component: any;
  let mockData: Hero[];

  beforeAll(() => {
    mockData = [
      {
        id: 11,
        name: "Dr. Nice",
      },
      {
        id: 12,
        name: "Narco",
      },
      {
        id: 13,
        name: "Mr. Bombastic",
      },
    ];

    component = () => {
      const { container } = render(
        <Router>
          <HeroSearch heroes={mockData} />
        </Router>
      );
      return container;
    };
  });

  it("should match snapshot", () => {
    expect(component()).toMatchSnapshot();
  });
});

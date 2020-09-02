import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Header from ".";

describe("Header", () => {
  let component: any;

  beforeAll(() => {
    component = () => {
      const { container } = render(
        <Router>
          <Header />
        </Router>
      );
      return container;
    };
  });

  it("should match snapshot", () => {
    expect(component()).toMatchSnapshot();
  });
});

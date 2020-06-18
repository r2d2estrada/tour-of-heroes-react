import React from "react";
import { render } from "@testing-library/react";
import FeaturedHero from "./FeaturedHero";
import { Hero } from "../../models/hero";

describe("FeaturedHero", () => {
  const mockHero: Hero = {
    id: 1,
    name: "Test",
  };

  let cpnt: any;

  beforeEach(() => {
    cpnt = <FeaturedHero hero={mockHero} />;
  });

  it("should match snapshot", () => {
    const { container } = render(cpnt);
    expect(container).toMatchSnapshot();
  });
});

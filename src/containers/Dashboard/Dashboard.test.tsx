import React from "react";
import renderer from "react-test-renderer";
import { Dashboard } from ".";

jest.mock("../../redux/actions/hero.actions");

describe("Dashboard", () => {
  const mockData = [
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

  let cpnt: any;

  beforeEach(() => {
    cpnt = renderer.create(
      <Dashboard heroes={mockData} getHeroes={jest.fn()} />
    );
  });

  it("should match snapshot", () => {
    expect(cpnt).toMatchSnapshot();
  });
});

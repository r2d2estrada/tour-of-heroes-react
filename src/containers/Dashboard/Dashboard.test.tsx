import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { Dashboard } from ".";
import { mockStore } from "../../__mocks__/mockStore";

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
      <Provider store={mockStore}>
        <Dashboard heroes={mockData} getHeroes={jest.fn(() => mockData)} />
      </Provider>
    );
  });

  it("should match snapshot", () => {
    expect(cpnt).toMatchSnapshot();
  });
});

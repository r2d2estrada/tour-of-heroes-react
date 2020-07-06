import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import Dashboard from ".";
import { mockStore } from "../../__mocks__/mockStore";

jest.mock("../../redux/actions/hero.actions");

describe("Dashboard", () => {
  let cpnt: any;

  beforeEach(() => {
    console.warn(mockStore.getState());
    cpnt = renderer.create(
      <Provider store={mockStore}>
        <Dashboard />
      </Provider>
    );
  });

  it("should match snapshot", () => {
    expect(cpnt).toMatchSnapshot();
  });
});

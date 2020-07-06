import React from "react";
import { render } from "@testing-library/react";
import Connected, { Messages } from ".";
import { Provider } from "react-redux";
import { mockStore } from "../../__mocks__/mockStore";

describe("Messages", () => {
  let cpnt: any;
  let connected: any;
  let mockData: any = ["Test 1", "Test 2"];

  beforeAll(() => {
    cpnt = <Messages messages={mockData} clearMessages={jest.fn()} />;
    connected = (
      <Provider store={mockStore}>
        <Connected />
      </Provider>
    );
  });

  it("should match snapshot", () => {
    const { container } = render(cpnt);
    expect(container).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it("Should connect to redux", () => {
    const { container } = render(connected);
    expect(container).toBeTruthy();
  });

  it("should match snapshot", () => {
    const { container } = render(cpnt);
  });
});

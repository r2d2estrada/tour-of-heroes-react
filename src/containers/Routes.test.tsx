import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Routes from "./Routes";
import { store } from "../redux";

describe("Routes", () => {
  let cpnt: any;

  beforeAll(() => {
    cpnt = (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  });

  it("should render without crashing", () => {
    const { container } = render(cpnt);
    expect(container).toBeTruthy();
  });
});

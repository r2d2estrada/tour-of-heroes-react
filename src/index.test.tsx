import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux";

describe("index (Main)", () => {
  const store = configureStore();

  it("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Provider store={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

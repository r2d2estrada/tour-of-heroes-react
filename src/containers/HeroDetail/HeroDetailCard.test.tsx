import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeroDetailCard from "./HeroDetailCard";
import { Hero } from "../../models/hero";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
    goBack: mockHistoryPush,
  }),
}));

describe("HeroDetailCard", () => {
  let component: any;
  let mockHero: Hero;

  beforeAll(() => {
    mockHero = {
      id: 1,
      name: "Test",
    };

    component = (
      <MemoryRouter>
        <HeroDetailCard
          hero={mockHero}
          handleChange={jest.fn()}
          handleSubmit={jest.fn}
          isUpdating={false}
        />
      </MemoryRouter>
    );
  });

  it("should render component and match snapshot", () => {
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });

  it("should go back when clicked is pushed", () => {
    const { getAllByRole } = render(component);
    fireEvent.click(getAllByRole("button")[0]);
    expect(mockHistoryPush).toHaveBeenCalled();
  });

  it("should submit form", () => {});
});

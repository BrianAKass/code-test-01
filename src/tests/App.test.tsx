import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("<App/>", () => {
  it("App rendered ", () => {
    render(<App />);
    screen.getByRole("");
  });
});

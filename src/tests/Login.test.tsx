import { render } from "@testing-library/react";
import Login from "../components/Login";

const defaultProps: Props = {
  field: { username: "butts are", password: "funny for testing strings" }
};

describe("<Login/>", () => {
  it("Login rendered ", () => {
    render(<Login {...defaultProps} />);
  });
});

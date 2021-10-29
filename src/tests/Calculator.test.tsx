import { render } from "@testing-library/react";
import Calculator from "../components/Calculator";

import { testData, calculate } from "./TestOuptuts";

describe("<Calculator/>", () => {
  it("Calculator rendered ", () => {
    render(<Calculator data={testData} calculation={calculate} />);
  });
});

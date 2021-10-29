import React from "react";
import { render, screen } from "@testing-library/react";
import Calculator from "../components/Calculator";

type FetchedData = {
  COUNTRY: string;
  COMMODITY_NAME: string;
  FIXED_OVERHEAD: string;
  VAR_OVERHEAD: string;
}[];
type Output = {
  country: string;
  total: number;
  overHeadPricePerTon: number;
  quantity: number;
  fixedOverHead: number;
  liked: boolean;
}[];
export type Props = {
  data: {
    fetchedData: FetchedData;
    commodity: string[];
    output: Output;
    favorites: Output;
  };
  calculation: (field: {
    quantity: string;
    pricePerTon: string;
    selectedCommodity: string;
  }) => void;
};

describe("<Calculator/>", () => {
  it("Calculator rendered ", () => {
    render(<Calculator data={Output} calculation={calculation} />);
    screen.getByRole("");
  });
});

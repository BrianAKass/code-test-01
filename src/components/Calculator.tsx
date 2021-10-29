import React, { ReactElement, useState } from "react";

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

export default function Calculator({ data, calculation }: Props): ReactElement {
  const [state, setState] = useState({
    quantity: "",
    pricePerTon: "",
    selectedCommodity: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => {
      return {
        ...prev,
        [event.target.id]: event.target.value.replace(/[^0-9.]/g, "")
      };
    });
  };
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState((prev) => {
      return { ...prev, [event.target.id]: event.target.value };
    });
  };
  const calculate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    calculation(state);
  };
  return (
    <div className="formsContainer">
      <form
        onSubmit={(e) => {
          calculate(e);
        }}
      >
        <h1>Calcuator</h1>
        <select
          id="selectedCommodity"
          onChange={(e) => {
            handleSelect(e);
          }}
        >
          <option key={0} value="">
            Select Commoditiy
          </option>
          {data.commodity.map((item: any, index: number) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          pattern="[0-9]*"
          placeholder="Quantity (In tons)"
          value={state.quantity}
          onChange={(e) => {
            handleChange(e);
          }}
          id="quantity"
        />
        <input
          type="text"
          placeholder="Price per ton"
          value={state.pricePerTon}
          id="pricePerTon"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          className="button"
          type="submit"
          value="Calculate"
          disabled={
            state.selectedCommodity.length === 0 ||
            state.quantity.length === 0 ||
            state.pricePerTon.length === 0
              ? true
              : false
          }
        />
      </form>
    </div>
  );
}

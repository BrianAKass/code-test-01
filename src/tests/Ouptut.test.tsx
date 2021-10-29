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

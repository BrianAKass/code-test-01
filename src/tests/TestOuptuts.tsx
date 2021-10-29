export const testFetchData = [
  {
    COUNTRY: "HN",
    COMMODITY_NAME: "lemon",
    FIXED_OVERHEAD: "32.00",
    VAR_OVERHEAD: "1.24"
  },
  {
    COUNTRY: "IN",
    COMMODITY_NAME: "lemon",
    FIXED_OVERHEAD: "20.00",
    VAR_OVERHEAD: "1.42"
  }
];
export const testFieldCalculation = {
  quantity: "50",
  pricePerTon: "50",
  selectedCommodity: "lemon"
};

export const output = [
  {
    country: "IN",
    total: 2591.0,
    overHeadPricePerTon: 51.42,
    quantity: 50,
    fixedOverHead: 20,
    liked: true
  },
  {
    country: "HN",
    total: 2594.0,
    overHeadPricePerTon: 51.24,
    quantity: 50,
    fixedOverHead: 32,
    liked: false
  },
  {
    country: "US",
    total: 2597.0,
    overHeadPricePerTon: 51.14,
    quantity: 50,
    fixedOverHead: 40,
    liked: false
  }
];
export const initialData = {
  fetchedData: [],
  commodity: [],
  output: [],
  favorites: [],
  loggedIn: false,
  onFavorites: false
};
export const testData = {
  fetchedData: testFetchData,
  commodity: ["lemon", "apple", "avacado"],
  output: output,
  favorites: [
    {
      country: "IN",
      total: 2591.0,
      overHeadPricePerTon: 51.42,
      quantity: 50,
      fixedOverHead: 20,
      liked: true
    }
  ],
  loggedIn: true,
  onFavorites: false
};
export const calculate = (field: {
  quantity: "50";
  pricePerTon: "50";
  selectedCommodity: "lemon";
}) => {
  return;
};

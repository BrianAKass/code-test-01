import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Results from "./components/Results";
import Calculator from "./components/Calculator";
import Logo from "./components/Logo";
import "./styles.css";

function App() {
  const initialState = {
    fetchedData: [],
    commodity: [],
    output: [],
    favorites: [],
    loggedIn: false,
    onFavorites: false
  };
  const [data, setData] = useState(initialState);

  const fetchData = async () => {
    const res = await fetch(
      "https://run.mocky.io/v3/86a0895e-472d-458e-b920-aa95ea6d934c"
    );
    const data = await res.json();
    const unique = data
      .map((item: any) => item["COMMODITY_NAME"])
      .filter(
        (data: string, index: number, self: string) =>
          self.indexOf(data) === index
      );
    setData((prev) => {
      return { ...prev, commodity: unique };
    });
    setData((prev) => {
      return { ...prev, fetchedData: data };
    });
  };

  const login = () => {
    setData((prev) => {
      return { ...prev, loggedIn: !prev.loggedIn };
    });
  };

  const calculation = (field: {
    quantity: string;
    pricePerTon: string;
    selectedCommodity: string;
  }) => {
    //create filtered list based on chosen commodity

    const filteredList = data.fetchedData
      .filter((item) => item["COMMODITY_NAME"] === field.selectedCommodity)
      .map((item) => ({
        country: item["COUNTRY"],
        total:
          (+item["VAR_OVERHEAD"] + +field.pricePerTon) * +field.quantity +
          +item["FIXED_OVERHEAD"],
        overHeadPricePerTon: +item["VAR_OVERHEAD"] + +field.pricePerTon,
        quantity: +field.quantity,
        fixedOverHead: +item["FIXED_OVERHEAD"],
        liked: false
      }))
      .sort((a, b) => a.total - b.total);

    setData((prev: any) => {
      return { ...prev, output: filteredList };
    });
  };

  const handleLiked = (index: number) => {
    type Output = {
      country: string;
      total: number;
      overHeadPricePerTon: number;
      quantity: number;
      fixedOverHead: number;
      liked: boolean;
    }[];

    let filteredList: Output = data.output;
    filteredList[index]["liked"] = !filteredList[index]["liked"];
    let newFavorites: Output = data.favorites;

    if (filteredList[index]["liked"] === true) {
      newFavorites.push(filteredList[index]);

      setData((prev: any) => {
        return { ...prev, output: filteredList, favorites: newFavorites };
      });
    } else {
      newFavorites = newFavorites.filter((item: any, dataIndex: number) => {
        return dataIndex !== index;
      });
      setData((prev: any) => {
        return { ...prev, output: filteredList, favorites: newFavorites };
      });
    }
  };

  const handleFavorites = () => {
    setData((prev) => {
      return { ...prev, onFavorites: !data.onFavorites };
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Logo LoggedIn={data.loggedIn} />
      {!data.loggedIn && <Login login={login} />}
      {data.loggedIn && !data.onFavorites && (
        <Calculator data={data} calculation={calculation} />
      )}
      {data.loggedIn && data.output && !data.onFavorites && (
        <Results
          title="Results"
          output={data.output}
          handleLiked={handleLiked}
          handleFavorites={handleFavorites}
        />
      )}
      {data.loggedIn && data.output && data.onFavorites && (
        <Results
          title="Favorites"
          output={data.favorites}
          handleLiked={handleLiked}
          handleFavorites={handleFavorites}
        />
      )}
    </div>
  );
}
export default App;

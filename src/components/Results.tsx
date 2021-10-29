import React, { ReactElement } from "react";
import StarIcon from "./StarIcon";

type Output = {
  country: string;
  total: number;
  overHeadPricePerTon: number;
  quantity: number;
  fixedOverHead: number;
  liked: boolean;
};

export type FilteredList = {
  title: string;
  output: Output[];
  handleLiked: (index: number) => void;
  handleFavorites: () => void;
};

export default function Results({
  title,
  output,
  handleLiked,
  handleFavorites
}: FilteredList): ReactElement {
  const handleClick = (index: number) => {
    handleLiked(index);
  };

  const handleClickFavorites = () => {
    handleFavorites();
  };

  return (
    <div className="output">
      {output.length > 0 && <h4>{title}</h4>}
      {output &&
        output.map(
          (
            item: {
              country: string;
              total: number;
              overHeadPricePerTon: number;
              quantity: number;
              fixedOverHead: number;
              liked: boolean;
            },
            index: number
          ) => {
            return (
              <h5
                key={index}
                onClick={() => {
                  handleClick(index);
                }}
              >
                {" "}
                <StarIcon enabled={item.liked} /> -{item.country}{" "}
                {item.total.toFixed(2)} | ({item.overHeadPricePerTon.toFixed(2)}{" "}
                * {item.quantity}) + {item.fixedOverHead}{" "}
              </h5>
            );
          }
        )}
      {title === "Results" ? (
        <span onClick={() => handleClickFavorites()}>Favorites</span>
      ) : (
        <span onClick={() => handleClickFavorites()}>Back</span>
      )}
    </div>
  );
}

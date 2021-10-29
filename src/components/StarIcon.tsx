import React, { ReactElement, useState } from "react";

export default function StarIcon(props: any) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 26.458 26.458"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.enabled ? (
        <path
          d="M18.208 16.033l2.662 9.13-7.75-5.51-7.86 5.351 2.846-9.073-7.519-5.82 9.508-.098 3.213-8.95 3.031 9.013 9.504.29z"
          stroke="#000"
          strokeWidth={1.09089352}
          strokeLinecap="round"
          strokeLinejoin="round"
          paintOrder="markers fill stroke"
        />
      ) : (
        <path
          d="M18.208 16.033l2.662 9.13-7.75-5.51-7.86 5.351 2.846-9.073-7.519-5.82 9.508-.098 3.213-8.95 3.031 9.013 9.504.29z"
          fill="none"
          stroke="#000"
          strokeWidth={1.09089352}
          strokeLinecap="round"
          strokeLinejoin="round"
          paintOrder="markers fill stroke"
        />
      )}
    </svg>
  );
}

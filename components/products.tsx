import { dummyData, tableHeadings } from "@/lib/data";
import React from "react";
import Product from "./product";

export default function Products() {
  return (
    <table className="flex-1">
      <thead className="">
        <tr className="text-left">
          {tableHeadings.map((item, index) => (
            <th className="text-[#001eb9] uppercase" key={index}>
              {item}
            </th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody className="">
        {dummyData.map((productItem, index) => (
          <tr
            className="border-b-2 border-b-[#969191]/20 last:border-b-0"
            key={index}
          >
            <Product {...productItem} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

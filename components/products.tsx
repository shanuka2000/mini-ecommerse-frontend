"use client";

import { dummyData, tableHeadings } from "@/lib/data";
import React, { useEffect, useState } from "react";
import Product from "./product";
import { ProductItem } from "@/lib/types";
import { TableLoader } from "./loaders";

export default function Products() {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    const fetchedProducts = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;
      const additionalPath = `/products`;
      const response = await fetch(apiUrl + additionalPath);
      const data: ProductItem[] = await response.json();
      setProducts(data);
    };

    fetchedProducts();
  }, []);

  return (
    <>
      {products.length > 0 ? (
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
            <>
              {products.map((productItem) => (
                <tr
                  className="border-b-2 border-b-[#969191]/20 last:border-b-0"
                  key={productItem.id}
                >
                  <Product {...productItem} />
                </tr>
              ))}
            </>
          </tbody>
        </table>
      ) : (
        <TableLoader />
      )}
    </>
  );
}

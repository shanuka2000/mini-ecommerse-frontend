import { ProductProps } from "@/lib/types";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

export default function Result({
  sku,
  product_name,
  product_description,
}: ProductProps) {
  return (
    <div className="flex items-center gap-2  py-4 px-10 border-b-2 border-b-[#969191]/20 last:border-b-0">
      <div className="flex flex-col flex-1 gap-2">
        <h5 className="text-[#001eb9] text-sm font-semibold">{sku}</h5>
        <h3 className="text-base font-semibold">{product_name}</h3>
        <p className="text-[#969191] text-xs">{product_description}</p>
      </div>
      <div className="text-[#001eb9] text-lg">
        <FaChevronRight />
      </div>
    </div>
  );
}

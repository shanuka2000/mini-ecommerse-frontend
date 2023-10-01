import React from "react";
import { BiChevronRight } from "react-icons/bi";

type SubHeadingProps = {
  children: string;
};

export default function SubHeading({ children }: SubHeadingProps) {
  return (
    <div className="flex items-center gap-2 text-[#001eb9]">
      <BiChevronRight className="text-3xl" />
      <h2 className="text-md font-bold">{children}</h2>
    </div>
  );
}

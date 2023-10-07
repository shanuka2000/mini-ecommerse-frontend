import React from "react";

import { LuSearch } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";
import PageHeading from "./page-heading";
import Link from "next/link";
import { MainHeadingTypes, SubHeadingTypes } from "@/lib/types";
import SubHeading from "./sub-heading";

type HeaderProps = {
  heading: MainHeadingTypes;
  subHeading?: SubHeadingTypes;
};

export default function Header({ heading, subHeading }: HeaderProps) {
  return (
    <header className={`${subHeading && "w-[90%] m-auto"}`}>
      <div className="mt-5">
        <div className="flex items-center gap-2">
          <PageHeading>{heading}</PageHeading>
          {subHeading && <SubHeading>{subHeading}</SubHeading>}
        </div>
        {!subHeading && (
          <div className="mt-4 flex items-center">
            <form className="flex bg-[#f7f7f7] p-2 w-[50%] rounded-full">
              <input
                className="bg-transparent flex-1 outline-none text-xs"
                placeholder="Search for products"
              />
              <button className="flex items-center justify-center bg-[#001eb9] h-[2rem] w-[6rem] rounded-full text-white text-sm">
                <LuSearch className="mr-2" />
                <span>Search</span>
              </button>
            </form>
            <div className="flex items-center gap-2 justify-end flex-1">
              <Link
                href="/new"
                className="flex items-center justify-center bg-[#001eb9] h-[2.5rem] w-[8rem] rounded-md text-white text-sm"
              >
                New Product
              </Link>
              <Link
                href="/favourite"
                className="flex items-center justify-center h-[2.5rem] w-[3rem] rounded-md border border-[#001eb9]"
              >
                <AiFillStar className="text-lg text-[#001eb9]" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

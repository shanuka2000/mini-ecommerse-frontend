import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";

export default function Header() {
  return (
    <header className="max-w-[90%] m-auto">
      <nav className="p-2 pt-4">
        <ul className="flex items-center justify-end gap-4">
          <li className="flex items-center">
            <span className="font-bold uppercase text-sm">Admin</span>
            <FaCaretDown className="ml-2" />
          </li>
          <li>
            <div className="bg-[#001eb9] w-[3rem] h-[3rem] rounded-full relative">
              {" "}
              <div className="bg-green-500 w-3 h-3 rounded-full absolute right-0 bottom-0"></div>
            </div>
          </li>
        </ul>
      </nav>
      <div className="mt-5">
        <div>
          <h1 className="text-2xl font-bold uppercase">Products</h1>
        </div>
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
            <button className="bg-[#001eb9] h-[2.5rem] w-[8rem] rounded-md text-white text-sm">
              New Product
            </button>
            <button className="flex items-center justify-center h-[2.5rem] w-[3rem] rounded-md border border-[#001eb9]">
              <AiFillStar className="text-lg text-[#001eb9]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

import React from "react";
import { FaCaretDown } from "react-icons/fa";

export default function Navigation() {
  return (
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
  );
}

import React from "react";

export function FormLoader() {
  return (
    <div className="animate-pulse flex flex-col">
      <div className="formBlock mt-10 gap-2">
        <div className="w-[5rem] h-[2rem] rounded-md bg-slate-300"></div>
        <div className="formInput !bg-slate-300"></div>
      </div>
      <div className="flex">
        <div className="formBlock mt-10 gap-2">
          <div className="w-[5rem] h-[2rem] rounded-md bg-slate-300"></div>
          <div className="formInput !bg-slate-300"></div>
        </div>
        <div className="formBlock mt-10 gap-2  justify-end">
          <div className="w-[5rem] h-[2rem] rounded-md bg-slate-300"></div>
          <div className="formInput !bg-slate-300"></div>
        </div>
      </div>
      <div className="formBlock flex-col gap-2 mt-10 !items-start !w-[100%]">
        <div className="w-[10rem] h-[2rem] rounded-md bg-slate-300"></div>
        <div className="w-[15rem] h-[1rem] rounded-md bg-slate-300"></div>
        <div className="formInput !h-28 !bg-slate-300 !w-[100%]"></div>
      </div>
    </div>
  );
}

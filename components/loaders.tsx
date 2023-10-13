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

export function ImageLoader() {
  return <div className="w-[60px] h-[60px] bg-slate-300 rounded-md"></div>;
}

export function TableLoader() {
  return (
    <div className="animate-pulse w-[100%] ">
      <div className="">
        <div className="flex gap-2 items-center">
          <div className=" w-[20%] h-5 flex items-center">
            <p className="bg-slate-300 w-[30%] h-3 rounded-lg"></p>
          </div>
          <div className=" w-[20%] h-5 flex items-center">
            <p className="bg-slate-300 w-[40%] h-3 rounded-lg"></p>
          </div>
          <div className=" w-[20%] h-5 flex items-center">
            <p className="bg-slate-300 w-[60%] h-3 rounded-lg"></p>
          </div>
          <div className=" w-[20%] h-5 flex items-center">
            <p className="bg-slate-300 w-[30%] h-3 rounded-lg"></p>
          </div>
          <div className=" w-[20%] h-5 flex items-center"></div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col">
          <div className="h-6 flex items-center py-10">
            <div className="w-[20%]">
              <p className="bg-slate-300 w-[20%] h-5 rounded-lg"></p>
            </div>
            <div className="w-[20%]">
              <ImageLoader />
            </div>
            <div className="w-[20%]">
              <p className="bg-slate-300 w-[20%] h-5 rounded-lg"></p>
            </div>
            <div className="w-[20%]">
              <p className="bg-slate-300 w-[20%] h-5 rounded-lg"></p>
            </div>
            <div className="w-[20%] flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-slate-300 rounded-md"></div>
              <div className="w-6 h-6 bg-slate-300 rounded-md"></div>
              <div className="w-6 h-6 bg-slate-300 rounded-md"></div>
            </div>
          </div>
          <div className="h-6 flex items-center py-10">
            <div className="w-[20%]">
              <p className="bg-slate-300 w-[20%] h-5 rounded-lg"></p>
            </div>
            <div className="w-[20%]">
              <ImageLoader />
            </div>
            <div className="w-[20%]">
              <p className="bg-slate-300 w-[20%] h-5 rounded-lg"></p>
            </div>
            <div className="w-[20%]">
              <p className="bg-slate-300 w-[20%] h-5 rounded-lg"></p>
            </div>
            <div className="w-[20%] flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-slate-300 rounded-md"></div>
              <div className="w-6 h-6 bg-slate-300 rounded-md"></div>
              <div className="w-6 h-6 bg-slate-300 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

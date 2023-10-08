import Header from "@/components/header";
import Result from "@/components/result";
import { dummyData } from "@/lib/data";
import React from "react";

export default function Page() {
  return (
    <>
      <Header heading="Products" />
      <main className="flex flex-col gap-2 pt-5">
        <h2 className="font-semibold text-[#969191] tracking-widest">
          4 results found for {`'Books'`}
        </h2>
        <section className="w-[90%] m-auto">
          {dummyData.map((item, index) => (
            <React.Fragment key={index}>
              <Result {...item} />
            </React.Fragment>
          ))}
        </section>
      </main>
    </>
  );
}

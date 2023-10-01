import Header from "@/components/header";
import Products from "@/components/products";
import React from "react";

export default function Home() {
  return (
    <>
      <Header heading="Products" />
      <main className="p-2 mt-5 flex">
        <Products />
      </main>
    </>
  );
}

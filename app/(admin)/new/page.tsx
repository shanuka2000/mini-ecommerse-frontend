import Header from "@/components/header";
import ProductForm from "@/components/product-form";
import React from "react";

export default function page() {
  return (
    <>
      <Header heading="Products" subHeading="Add new product" />
      <main className="w-[90%] m-auto">
        <ProductForm />
      </main>
    </>
  );
}

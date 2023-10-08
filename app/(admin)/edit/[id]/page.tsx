"use client";

import Header from "@/components/header";
import ProductForm from "@/components/product-form";
import { dummyData } from "@/lib/data";

type Props = {
  params: {
    id: (typeof dummyData)[number]["id"];
  };
};

export default function EditPage({ params: { id } }: Props) {
  const data = dummyData[id];

  return (
    <>
      <Header heading="Products" subHeading="Edit product" />
      <main className="w-[90%] m-auto">
        <ProductForm {...data} />
      </main>
    </>
  );
}

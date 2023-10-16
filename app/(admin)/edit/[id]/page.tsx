"use client";

import Header from "@/components/header";
import { FormLoader } from "@/components/loaders";
import ProductForm from "@/components/product-form";
import { ProductItem } from "@/lib/types";
import { useEffect, useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

export default function EditPage({ params: { id } }: Props) {
  const [data, setData] = useState<ProductItem>();

  useEffect(() => {
    const fetchedProducts = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;
      const additionalPath = `/products/${id}`;
      const response = await fetch(apiUrl + additionalPath);
      const data: ProductItem = await response.json();
      setData(data);
    };

    fetchedProducts();
  }, []);

  return (
    <>
      <Header heading="Products" subHeading="Edit product" />
      <main className="w-[90%] m-auto">
        {data ? (
          <ProductForm
            id={data?.id as string}
            sku={data?.sku as string}
            name={data?.name as string}
            qty={data?.qty as number}
            description={data?.description as string}
            images={data?.images as string[]}
          />
        ) : (
          <FormLoader />
        )}
      </main>
    </>
  );
}

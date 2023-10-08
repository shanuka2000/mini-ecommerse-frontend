import { ProductProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillDelete, AiFillStar } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";

export default function Product({
  id,
  sku,
  image,
  product_name,
  price,
}: ProductProps) {
  return (
    <>
      <td className="w-[20%] pt-10 pb-10 text-[#969191]">{sku}</td>
      <td className="w-[20%]">
        <Image
          src={image[0]}
          alt={product_name}
          quality={95}
          className="w-11 rounded-md"
        />
      </td>
      <td className="w-[20%]">{product_name}</td>
      <td className="w-[20%]">{price}</td>
      <td className="flex items-center justify-center gap-4 text-2xl pt-10 pb-10 text-[#001eb9]">
        <AiFillDelete />
        <Link href={`/edit/${id}`}>
          <MdModeEdit />
        </Link>
        <AiFillStar />
      </td>
    </>
  );
}

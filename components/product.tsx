import { ProductItem, ProductProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillDelete, AiFillStar } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";

export default function Product({ id, sku, name, qty, images }: ProductItem) {
  return (
    <>
      <td className="w-[20%] pt-10 pb-10 text-[#969191]">{sku}</td>
      <td className="w-[20%]">
        <Image
          src={images[0]}
          alt={name}
          quality={95}
          width={60}
          height={70}
          className="rounded-md w-auto h-auto"
        />
      </td>
      <td className="w-[20%]">{name}</td>
      <td className="w-[20%]">{qty}</td>
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

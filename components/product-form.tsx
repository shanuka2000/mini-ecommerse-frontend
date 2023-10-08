"use client";

import { ProductProps } from "@/lib/types";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import SubmitBtn from "./submit-btn";

export default function ProductForm({
  sku,
  imageUrls,
  product_name,
  qty,
  product_description,
}: ProductProps) {
  const [images, setImages] = useState<File[]>([]);
  const [imagesUrl, setImagesUrl] = useState(imageUrls);

  const formType = imageUrls ? false : true;

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFilses = event.target.files;

    if (!selectedFilses) {
      return;
    }

    for (const file of selectedFilses) {
      setImages((prevImages) => [...prevImages, file]);
    }

    console.log(images);
  };

  const handleImageRemove = (index: number, type: string) => {
    if (type === "add") {
      setImages((prevImages) => {
        const newImages = [...prevImages];
        newImages.splice(index, 1);
        return newImages;
      });
    } else if (type === "edit") {
      setImagesUrl((prevImages) => {
        const newImages = [...prevImages];
        newImages.splice(index, 1);
        return newImages;
      });
    } else {
      return;
    }
  };

  return (
    <form className="flex flex-col gap-10">
      <div className="formBlock mt-10">
        <label htmlFor="sku" className="formLabel">
          SKU
        </label>
        <input id="sku" className="formInput" type="text" defaultValue={sku} />
      </div>
      <div className="flex">
        <div className="formBlock ">
          <label htmlFor="name" className="formLabel">
            Name
          </label>
          <input
            id="name"
            className="formInput"
            type="text"
            defaultValue={product_name}
          />
        </div>
        <div className="formBlock justify-end">
          <label htmlFor="qty" className="formLabel">
            QTY
          </label>
          <input
            id="qty"
            className="formInput"
            type="text"
            defaultValue={qty}
          />
        </div>
      </div>
      <div className="formBlock flex-col gap-2 !items-start !w-[100%]">
        <label className="formLabel !w-[100%]" htmlFor="description">
          Product Description
        </label>
        <p className="text-[#969191] text-xs">
          A small description about the product
        </p>
        <textarea
          className="formInput !w-[100%] !h-28 resize-none py-4"
          maxLength={5000}
          id="description"
          defaultValue={product_description}
        ></textarea>
      </div>
      <div className="formBlock !w-[100%] !items-start gap-[5rem]">
        <div className="flex flex-col gap-2">
          <p className="formLabel !w-[100%]">Product Images</p>
          <p className="text-[#969191] text-xs">
            JPEG, PNG, SVG or GIF <br /> {"(Maximum file size 50MB)"}
          </p>
        </div>
        <div className="flex flex-1 gap-2 flex-wrap">
          <div className="flex gap-2 flex-wrap">
            {imageUrls
              ? imagesUrl.map((item, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={item}
                      alt="image"
                      width={60}
                      height={60}
                      className="rounded-xl"
                    />
                    <span
                      className="absolute text-red-600 top-0 right-0 text-lg cursor-pointer"
                      onClick={() => handleImageRemove(index, "edit")}
                    >
                      <IoIosCloseCircle />
                    </span>
                  </div>
                ))
              : images.map((image, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={URL.createObjectURL(image)}
                      alt="image"
                      width={60}
                      height={60}
                      className="rounded-xl"
                    />
                    <span
                      className="absolute text-red-600 top-0 right-0 text-lg cursor-pointer"
                      onClick={() => handleImageRemove(index, "add")}
                    >
                      <IoIosCloseCircle />
                    </span>
                  </div>
                ))}
          </div>
          <label
            htmlFor="images"
            className="text-[#001eb9] text-sm font-medium underline cursor-pointer"
          >
            {imageUrls ? <span>Edit Images</span> : <span>Add Images</span>}
          </label>
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .svg, .gif"
            multiple
            id="images"
            onChange={handleFileSelect}
            className="w-[0.1px] h-[0.1px] opacity-0 overflow-hidden absolute -z-1"
          />
        </div>
      </div>
      <div className="formBlock !w-[100%] justify-end">
        <SubmitBtn formType={formType} />
      </div>
    </form>
  );
}

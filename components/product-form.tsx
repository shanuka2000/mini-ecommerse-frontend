"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

export default function ProductForm() {
  const [images, setImages] = useState<File[]>([]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFilses = event.target.files;

    if (!selectedFilses) {
      return;
    }

    for (const file of selectedFilses) {
      setImages((prevImages) => [...prevImages, file]);
    }
  };

  const handleImageRemove = (index: number) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  return (
    <form className="flex flex-col gap-10">
      <div className="formBlock mt-10">
        <label htmlFor="sku" className="formLabel">
          SKU
        </label>
        <input id="sku" className="formInput" type="text" />
      </div>
      <div className="flex">
        <div className="formBlock ">
          <label htmlFor="name" className="formLabel">
            Name
          </label>
          <input id="name" className="formInput" type="text" />
        </div>
        <div className="formBlock justify-end">
          <label htmlFor="qty" className="formLabel">
            QTY
          </label>
          <input id="qty" className="formInput" type="text" />
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
          className="formInput !w-[100%] resize-none !h-28"
          maxLength={5000}
          id="description"
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
            {images.map((image, index) => (
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
                  onClick={() => handleImageRemove(index)}
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
            Add Images
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
    </form>
  );
}

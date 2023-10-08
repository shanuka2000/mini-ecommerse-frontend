import product01 from "@/public/product-img.png";
import product02 from "@/public/product-img-1.png";
import product03 from "@/public/product-img-2.png";
import product04 from "@/public/product-img-3.png";
import product05 from "@/public/product-img-4.png";

export const dummyData = [
  {
    id: 0,
    sku: "#CA25",
    image: product01,
    product_name: "Product-Name",
    price: "$24.00",
    product_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    sku: "#CA34",
    image: product02,
    product_name: "Product-Name",
    price: "$24.00",
    product_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    sku: "#CA35",
    image: product03,
    product_name: "Product-Name",
    price: "$24.00",
    product_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    sku: "#CA56",
    image: product04,
    product_name: "Product-Name",
    price: "$24.00",
    product_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    sku: "#CA57",
    image: product05,
    product_name: "Product-Name",
    price: "$24.00",
    product_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
] as const;

export const tableHeadings = ["id", "sku", "image", "product name", "price"];

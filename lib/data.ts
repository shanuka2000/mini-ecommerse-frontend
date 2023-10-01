import product01 from "@/public/product-img.png";
import product02 from "@/public/product-img-1.png";
import product03 from "@/public/product-img-2.png";
import product04 from "@/public/product-img-3.png";
import product05 from "@/public/product-img-4.png";

export const dummyData = [
  {
    sku: "#CA25",
    image: product01,
    product_name: "Product-Name",
    price: "$24.00",
  },
  {
    sku: "#CA34",
    image: product02,
    product_name: "Product-Name",
    price: "$24.00",
  },
  {
    sku: "#CA35",
    image: product03,
    product_name: "Product-Name",
    price: "$24.00",
  },
  {
    sku: "#CA56",
    image: product04,
    product_name: "Product-Name",
    price: "$24.00",
  },
  {
    sku: "#CA57",
    image: product05,
    product_name: "Product-Name",
    price: "$24.00",
  },
] as const;

export const tableHeadings = ["sku", "image", "product name", "price"];

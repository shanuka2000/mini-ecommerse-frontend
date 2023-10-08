import { dummyData } from "./data";

export type MainHeadingTypes = "Products" | "Favourite products";
export type SubHeadingTypes = "Add new product" | "Edit product";
export type ProductProps = (typeof dummyData)[number];

import React from "react";

type PageHeadingProps = {
  children: string;
};

export default function PageHeading({ children }: PageHeadingProps) {
  return <h1 className="text-2xl font-bold uppercase">{children}</h1>;
}

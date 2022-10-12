import React from "react";
import Items from "../Items/Items";

function SpecialProducts({
  products,
  title,
}: {
  products: { name: string; material: string; minOrder: string }[];
  title: string;
}) {
  return (
    <div className="w-11/12 pt-10 pb-16 mx-auto">
      <div className="flex justify-between mb-8">
        <h3 className="text-3xl font-bold">{title}</h3>
        <button className="border-2 border-cyan-600 text-sm py-1 px-5">
          View All
        </button>
      </div>
      <div className="grid grid-flow-col gap-x-10">
        <Items products={products} />
      </div>
    </div>
  );
}

export default SpecialProducts;

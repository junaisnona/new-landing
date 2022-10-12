import Link from "next/link";
import React from "react";

function Items({
  products,
}: {
  products: { name: string; material: string; minOrder: string }[];
}) {
  return (
    <>
      {products.map((product) => (
        <Link href={"/uniforms/productdetails"}>
          <div>
            <div className="w-48 h-56 bg-slate-400 relative cursor-pointer">
              <div className="text-xs px-4 py-1 rounded-full bg-slate-50 absolute bottom-2 left-2">
                10 Days
              </div>
            </div>
            <div className="flex flex-col leading-7">
              <span className="text-base font-semibold">{product.name}</span>
              <span className="text-cyan-700 font-medium">
                &#8377;2,000 - &#8377;2,500
              </span>
              <span className="text-sm text-gray-500">{product.material}</span>
              <span className="text-sm text-gray-500">
                Min Order: {product.minOrder}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Items;

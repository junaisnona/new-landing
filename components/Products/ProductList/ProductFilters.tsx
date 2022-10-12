import React from "react";

function ProductFilters() {
  return (
    <div className="py-2 flex items-center gap-x-2 border-b-[1px] border-b-gray-200">
      <span className="font-semibold">Applied Filters:</span>
      <ul className="flex gap-x-2">
        <li className="text-sm border py-1 px-3 rounded-full cursor-pointer">
          White
        </li>
        <li className="text-sm border py-1 px-3 rounded-full cursor-pointer">
          Long Sleeves
        </li>
        <li className="text-sm border py-1 px-3 rounded-full cursor-pointer">
          Hooded
        </li>
        <li className="text-sm border py-1 px-3 rounded-full cursor-pointer">
          Polyster
        </li>
      </ul>
      <span className="text-sm border py-1 px-3 rounded-lg absolute right-0 cursor-pointer">
        Sort
      </span>
    </div>
  );
}

export default ProductFilters;

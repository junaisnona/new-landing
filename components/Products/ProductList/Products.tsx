import React from "react";
import Items from "../../General/Items/Items";
import PaginationButton from "./PaginationButton";
import ProductFilters from "./ProductFilters";
import ProductTitle from "./ProductTitle";

const topProducts = [
  { name: "Product Name", material: "100% Cotton", minOrder: "150" },
  { name: "Product Name", material: "100% Cotton", minOrder: "150" },
  { name: "Product Name", material: "100% Cotton", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
];

function Products() {
  return (
    <main className="w-full">
      <div className="relative w-[96%] pt-5 pb-10">
        <div>
          <ProductTitle />
          <ProductFilters />
          <div>
            <div className="flex justify-between flex-wrap gap-10 py-5">
              <Items products={topProducts} />
            </div>
          </div>
          <PaginationButton />
        </div>
      </div>
    </main>
  );
}

export default Products;

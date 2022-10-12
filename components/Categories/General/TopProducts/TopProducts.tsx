import React from "react";
import SpecialProducts from "../../../General/SpecialProducts/SpecialProducts";

const topProducts = [
  { name: "Product Name", material: "100% Cotton", minOrder: "150" },
  { name: "Product Name", material: "100% Cotton", minOrder: "150" },
  { name: "Product Name", material: "100% Cotton", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
];

function TopProducts() {
  return (
    <div>
      <SpecialProducts products={topProducts} title={"Our Top Products"} />
    </div>
  );
}

export default TopProducts;

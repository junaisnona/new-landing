import React from "react";
import SpecialProducts from "../../General/SpecialProducts/SpecialProducts";
import ContactBanner from "../General/ContactBanner/ContactBanner";
import Navigation from "../General/Navigation/Navigation";
import ProductDisplay from "./ProductDisplay";

const topProducts = [
  { name: "Product Name", material: "100% Cotton", minOrder: "150" },
  { name: "Product Name", material: "100% Cotton", minOrder: "150" },
  { name: "Product Name", material: "100% Cotton", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
  { name: "Product Name", material: "Product Material", minOrder: "150" },
];

function ProductsDetails() {
  return (
    <div>
      <Navigation
        path={
          "Home / Uniforms / Delivery Rider Gear / Sweatshirts / Black Hoodie"
        }
      />
      <ProductDisplay />
      <SpecialProducts products={topProducts} title={"Related Products"} />
      <SpecialProducts
        products={topProducts}
        title={"You May Also Want To Check These"}
      />
      <ContactBanner />
    </div>
  );
}

export default ProductsDetails;

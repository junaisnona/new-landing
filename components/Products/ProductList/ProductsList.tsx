import React from "react";
import Procedures from "../../General/Procedures/Procedures";
import ContactBanner from "../General/ContactBanner/ContactBanner";
import Navigation from "../General/Navigation/Navigation";
import Products from "./Products";
import Sidebar from "./Sidebar";

function ProductsList() {
  return (
    <div>
      <Navigation
        path={"Home / Uniforms / Delivery Rider Gear / Sweatshirts"}
      />
      <div className="flex gap-x-5">
        <Sidebar />
        <Products />
      </div>
      <ContactBanner />
      <Procedures />
    </div>
  );
}

export default ProductsList;

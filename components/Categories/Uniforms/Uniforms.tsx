import React from "react";
import Features from "../../General/Features/Features";
import Procedures from "../../General/Procedures/Procedures";
import Banner from "../General/Banner/Banner";
import ContactBanner from "../General/ContactBanner/ContactBanner";
import ProductCategories from "../General/ProductCategories/ProductCategories";
import Testimonials from "../General/Testimonials/Testimonials";
import TopProducts from "../General/TopProducts/TopProducts";

function Uniforms() {
  return (
    <div>
      <Banner />
      <ProductCategories />
      <TopProducts />
      <ContactBanner />
      <Features />
      <Testimonials />
      <Procedures />
    </div>
  );
}

export default Uniforms;

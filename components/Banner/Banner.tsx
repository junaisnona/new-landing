import React from "react";
import Category from "../Category/Category";
import Header from "../Header/Header";

function Banner() {
  return (
    <div className="h-[73vh] relative">
      <div className="bg-pink-300 h-[92%] px-12">
        <Header />
        <div className="flex items-center h-4/6">
        <div className="w-full flex items-center justify-between">
          <div className="w-full">
            <h1 className="text-4xl font-bold">A Managed Marketplace To Simplify Sourcing And Supply Chain</h1>
            <p className="my-10 text-lg">
              Customized - Work & Safety Wear | White Labelling | Soft
              Furnishing
            </p>
            <div>
              <button className="btn btn-secondary w-40 h-10">For Vendors</button>
              <button className="btn btn-outline w-40 h-10 ml-4">For Manufacturers</button>
            </div>
          </div>
          <div className="w-full flex justify-end items-center">
            <div className="w-[450px] bg-slate-300 h-80">
            </div>
          </div>
        </div>
        </div>
      <Category />
      </div>

    </div>
  );
}

export default Banner;

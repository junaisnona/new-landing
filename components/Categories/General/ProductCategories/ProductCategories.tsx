import React, { useState } from "react";
import Image from "next/image";
import Shoe from "../../../../Images/Sample/Shoe.jpg";
import {
  uniformsCategory,
  uniformsCategoryTitle,
} from "../../../../data/static/unifromsCategory";
import Link from "next/link";

function ProductCategories() {
  const [isHovering, setIsHovered] = useState(-1);
  const onMouseEnter = (index: number) => setIsHovered(index);
  const onMouseLeave = (index: number) => setIsHovered(-1);
  return (
    <div>
      <div className="w-10/12 text-center py-10 mx-auto">
        <h2 className="text-3xl font-bold">Explore Our Top Categories</h2>
        <div className="flex justify-center items-center gap-3 mt-8 mb-8">
          {uniformsCategoryTitle.map((item, index) => (
            <button
              className={`${
                index === 0 ? "bg-cyan-700 text-white" : "border"
              } text-sm rounded-full px-4 py-2`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-14 justify-center">
          {uniformsCategory.map((item, index) => (
            <Link href={"uniforms/products"}>
              <div className="flex flex-col items-center">
                <div
                  className="relative w-32 h-32 rounded-full overflow-hidden flex items-center bg-slate-400"
                  onMouseEnter={() => onMouseEnter(index)}
                  onMouseLeave={() => onMouseLeave(index)}
                >
                  {isHovering === index ? (
                    <Image
                      src={Shoe}
                      width="400px"
                      height="450px"
                      objectFit="cover"
                    />
                  ) : (
                    <Image src={Shoe} objectFit="cover" />
                  )}
                </div>
                <span>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCategories;

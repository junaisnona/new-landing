import Link from "next/link";
import React from "react";

const categories = [
  {
    title: "Uniforms",
    subtitle: "Smart Design for Smart Services",
  },
  {
    title: "Soft Furnishing",
    subtitle: "Freshness, Optimism, Honesty",
  },
  {
    title: "White Labelling",
    subtitle: "Productivity centric fabric tailoring",
  },
  {
    title: "Accessories",
    subtitle: "Productivity centric fabric tailoring",
  },
];

function Category() {
  return (
    <div className="relative top-12">
      <div className="grid grid-flow-col gap-x-5">
        {categories.map((category) => (
          // <Link href={category.title.toLocaleLowerCase().split(" ").join("")}>
          <Link href="uniforms">
            <div className="flex items-center gap-5 p-5 bg-lime-200 rounded-sm transition-all duration-500 hover:translate-y-[-1rem] cursor-pointer">
              <div className="w-16 h-16 bg-slate-400"></div>
              <div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <p className="text-sm font-normal my-1">{category.subtitle}</p>
                <span className="text-cyan-500 underline decoration-1 underline-offset-2">
                  View More
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;

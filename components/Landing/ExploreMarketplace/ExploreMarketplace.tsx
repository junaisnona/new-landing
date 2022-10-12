import React from "react";

const materials = [
  {
    description: "Lorem Ipsum dummy text of the printing and  industry.",
  },
  {
    description: "Lorem Ipsum dummy text of the printing and  industry.",
  },
  {
    description: "Lorem Ipsum dummy text of the printing and  industry.",
  },
  {
    description: "Lorem Ipsum dummy text of the printing and  industry.",
  },
  {
    description: "Lorem Ipsum dummy text of the printing and  industry.",
  },
  {
    description: "Lorem Ipsum dummy text of the printing and  industry.",
  },
];

function ExploreMarketplace() {
  return (
    <div className="pb-10">
      <div className="w-1/2 mx-auto text-center">
        <h2 className="text-3xl font-bold">Best Raw Material's Marketplace</h2>
        <p className="my-3">
          NONA Lifestyle ensures an agile process between customers, designers,
          merchandisers and poduction base. Real time inventory and capacity
          mapping leads.
        </p>
      </div>
      <div className="py-7">
        <div className="horizontal-scrollbar flex flex-nowrap overflow-x-scroll gap-x-8">
          {materials.map((material, index) => (
            <div className={`${index === 0 && "ml-14"}`}>
              <div className="w-[250px] h-[200px] bg-slate-400"></div>
              <p className="text-lg my-5">{material.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary text-center w-56 h-10">
          Explore Marketplace
        </button>
      </div>
    </div>
  );
}

export default ExploreMarketplace;

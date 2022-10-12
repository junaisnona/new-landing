import React from "react";

const rates = [
  { rate: "5,000+", item: "Products" },
  { rate: "100+", item: "Categories" },
  { rate: "1,500+", item: "Partners" },
  { rate: "5,000+", item: "Active Customers" },
];

function Rates() {
  return (
    <div>
      <div className="w-11/12 flex justify-between bg-pink-50 p-5 rounded-md mx-auto">
        {rates.map((rate) => (
          <div className="flex">
            <div className="w-16 h-16 m-5 bg-slate-400"></div>
            <div className="flex flex-col justify-center">
              <span className="text-3xl font-bold pb-2">{rate.rate}</span>
              <span>{rate.item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rates;

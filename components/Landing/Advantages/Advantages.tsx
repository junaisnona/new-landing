import React from "react";
import Rates from "../Rates/Rates";

const features = [
  {
    title: "You Name It, We Source It",
    description:
      "Indian weavers of designers of furnishing fabrics is a textile manufacturer founded.",
  },
  {
    title: "Choose Your Category And Quantity",
    description:
      "Indian weavers of designers of furnishing fabrics is a textile manufacturer founded.",
  },
  {
    title: "24/7 Production Tracking",
    description:
      "Indian weavers of designers of furnishing fabrics is a textile manufacturer founded.",
  },
  {
    title: "End-To-End Production Management",
    description:
      "Indian weavers of designers of furnishing fabrics is a textile manufacturer founded.",
  },
];

function Advantages() {
  return (
    <div>
      <div className="text-center bg-cyan-100 p-10">
        <h2 className="text-3xl my-8 font-bold">Why Choose Nona Lifestyle</h2>

        <div className="flex">
          {features.map((feature) => (
            <div className="text-center flex flex-col items-center">
              <div className="w-72 h-52 bg-slate-400"></div>
              <div className="w-11/12">
                <h3 className="text-lg font-bold mt-3 mb-1">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Rates />
    </div>
  );
}

export default Advantages;

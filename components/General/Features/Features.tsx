import { useRouter } from "next/router";
import React from "react";

const features = [
  {
    title: "Ease Of Apparels & Linen Sourcing",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  },
  {
    title: "Live Order Tracking",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  },
  {
    title: "Quality And Fast Deliveries",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  },
];

function Features() {
  const { asPath } = useRouter();
  return (
    <div className="py-10">
      <div className="w-9/12 mx-auto">
        {asPath.endsWith("/uniforms") && (
          <div className="text-center leading-10 my-5">
            <span className="text-xl font-semibold">HOW IT WORKS</span>
            <h2 className="text-3xl font-bold">
              Know How Your Order Reaches To You
            </h2>
          </div>
        )}
        <div className="grid grid-rows-3 gap-y-10">
          {features.map((feature, index) => (
            <div className={`h-96 grid grid-cols-2 py-5 gap-x-14`}>
              <div
                className={`flex gap-x-5 ${
                  index + 1 === 2 && "order-2 justify-end"
                }`}
              >
                <div
                  className={`w-64 h-80 bg-slate-400 ${
                    index + 1 === 2 ? "self-start" : "self-end"
                  }`}
                ></div>
                <div
                  className={`w-64 h-80 bg-slate-400 ${
                    index + 1 === 2 ? "self-end" : "self-start"
                  }`}
                ></div>
              </div>
              <div
                className={`flex flex-col justify-center ${
                  index + 1 === 2 && "order-1"
                }`}
              >
                <h2 className="text-3xl font-bold mb-5">{feature.title}</h2>
                <p>{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;

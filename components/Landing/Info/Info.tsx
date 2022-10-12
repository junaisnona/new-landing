import React from "react";

function Info() {
  return (
    <div>
      <div className="p-10">
        <div className="text-center mb-8">
          <span className="text-2xl block mt-10 mb-6">Who We Are</span>
          <h2 className="text-3xl font-bold">
            A Managed Supplychain Marketplace
          </h2>
        </div>

        <div className="w-10/12 grid grid-cols-2 grid-rows-1 place-items-center gap-14 mx-auto">
          <div className="w-11/12 h-80 bg-slate-400"></div>
          <div>
            <p className="mb-6">
              Indian weavers of designer of furnishing fabrics is a textile
              manufacturer founded in 1970 and renowned for new and stylish
              interpretations of natural & organic fabrics.
            </p>
            <ul>
              <li>
                ✅ All of our fabrics are designed and woven at our own weaving
                mill.
              </li>
              <li>✅ Al to match the best of the vetted suppliers.</li>
              <li>✅ Fast and flexible supply chain.</li>
              <li>✅ Chat in real-time with suppliers directly.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;

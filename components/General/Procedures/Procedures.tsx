import React from "react";

const procedures = [
  "Select Manufacturer",
  "Select Desired Materials",
  "Pre Sample Approval",
  "Live Tracking",
  "Fast Delivery",
];

function Procedures() {
  return (
    <div className="bg-slate-700 py-4">
      <div className="w-10/12 mx-auto text-white flex justify-between items-center">
        {procedures.map((procedure, index) => (
          <>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-white"></div>
              <span>{procedure}</span>
            </div>
            {procedures.length !== index + 1 && (
              <span className="text-xl">{">"}</span>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default Procedures;

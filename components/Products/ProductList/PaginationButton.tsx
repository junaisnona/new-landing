import React from "react";

const pageNumber = [1, 2, "...", 9, 10];

function PaginationButton() {
  return (
    <div className="text-center flex justify-center gap-3 py-5">
      <button className="w-8 h-8 rounded-md bg-gray-400 text-gray-200">
        {"<"}
      </button>
      {pageNumber.map((page) => (
        <button
          className={`w-8 h-8 rounded-md border ${
            page === 1 && "border-cyan-900"
          }`}
        >
          {page}
        </button>
      ))}
      <button className="w-8 h-8 rounded-md text-gray-400 border">{">"}</button>
    </div>
  );
}

export default PaginationButton;

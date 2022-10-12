import React from "react";

const productdetails = [
  { title: "GSM", value: "120" },
  { title: "Material", value: "Cotton" },
  { title: "Fabric", value: "Knit" },
  { title: "Fit", value: "Regular" },
  { title: "Length", value: "Waist Length" },
  { title: "Logo Customizable", value: "Yes" },
  { title: "Trim Customizable", value: "Yes" },
];

function ProductDisplay() {
  return (
    <div>
      <div className="py-10 px-14">
        <div className="grid grid-cols-2 gap-x-10">
          <div className="flex gap-x-5">
            <div className="flex flex-col gap-y-2">
              <div className="w-20 h-16 bg-slate-600"></div>
              <div className="w-20 h-16 bg-slate-600"></div>
              <div className="w-20 h-16 bg-slate-600"></div>
              <div className="w-20 h-16 bg-slate-600"></div>
              <div className="w-20 h-16 bg-slate-600"></div>
              <div className="w-20 h-16 bg-slate-600"></div>
              <div className="w-20 h-16 bg-slate-600"></div>
            </div>
            <div className="w-full h-[500px] bg-slate-600"></div>
          </div>
          <div className="w-full h-full">
            <div className="flex flex-col gap-y-8">
              <div>
                <h3 className="text-2xl font-bold">Black Hoodie</h3>
                <span className="block text-xl text-cyan-700 font-medium my-3">
                  &#8377;2,000 - &#8377;2,500
                </span>
                <div className="leading-8">
                  <span className="block text-gray-600">
                    Minimum Order Quantity{" "}
                    <span className="font-medium text-black">500 pieces</span>
                  </span>
                  <span className="block text-gray-600">
                    Lead Time{" "}
                    <span className="font-medium text-black">60 days</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-x-5">
                <label>QTY</label>
                <input
                  placeholder="Minimum 500"
                  className="w-36 p-3 rounded-sm border border-gray-300 outline-none"
                />
                <button className="py-3 px-8 btn-primary">
                  Request Quotation
                </button>
              </div>

              <div>
                <label className="block font-semibold">Color</label>
                <div className="w-11/12 flex flex-wrap gap-3 py-5">
                  <div className="w-16 h-16 bg-slate-400"></div>
                  <div className="w-16 h-16 bg-slate-400"></div>
                  <div className="w-16 h-16 bg-slate-400"></div>
                  <div className="w-16 h-16 bg-slate-400"></div>
                  <div className="w-16 h-16 bg-slate-400"></div>
                  <div className="w-16 h-16 bg-slate-400"></div>
                  <div className="w-16 h-16 bg-slate-400"></div>
                  <div className="w-16 h-16 bg-slate-400"></div>
                  <div className="w-16 h-16 bg-slate-400"></div>
                  <div className="w-16 h-16 bg-slate-400"></div>
                  <div className="w-16 h-16 bg-slate-400"></div>
                  <div className="w-16 h-16 bg-slate-400"></div>
                </div>
              </div>

              <div>
                <label className="block font-semibold">Size</label>
                <ul className="flex gap-3 items-center py-5">
                  <li className="w-14 h-10 border flex justify-center items-center">
                    <span>S</span>
                  </li>
                  <li className="w-14 h-10 border flex justify-center items-center">
                    <span>M</span>
                  </li>
                  <li className="w-14 h-10 border flex justify-center items-center">
                    <span>L</span>
                  </li>
                  <li className="w-14 h-10 border flex justify-center items-center">
                    <span>XL</span>
                  </li>
                  <li className="w-14 h-10 border flex justify-center items-center">
                    <span>XXL</span>
                  </li>
                  <li className="text-sm font-semibold text-cyan-500">
                    Size Chart
                  </li>
                </ul>
              </div>

              <div>
                <label className="block font-semibold">Product Details</label>
                <div className="py-5">
                  <div className="p-[1px] bg-gray-200">
                    <table className="w-full">
                      <tbody className="leading-8">
                        {productdetails.map((item, index) => (
                          <tr>
                            <td
                              className={`${
                                index % 2 === 0 ? "bg-gray-200" : "bg-white"
                              } text-gray-500 pl-3`}
                            >
                              {item.title}
                            </td>
                            <td
                              className={`${
                                index % 2 === 0 ? "bg-gray-200" : "bg-white"
                              } text-gray-500`}
                            >
                              :
                            </td>
                            <td
                              className={`${
                                index % 2 === 0 ? "bg-gray-200" : "bg-white"
                              }`}
                            >
                              {item.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <span className="text-cyan-600 underline underline-offset-2">
                    View More
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;

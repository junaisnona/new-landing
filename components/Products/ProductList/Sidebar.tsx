import React, { useState } from "react";

const filters = {
  filterLists: [
    "Size",
    "Color",
    "Material",
    "Nect style",
    "Sleeve Length",
    "Style",
  ],
  sizes: ["Small", "Medium", "Large", "Extra Large"],
};

function Sidebar() {
  const [click, setClick] = useState(false);
  return (
    <aside className="w-96 border-r-[1px] border-r-gray-400 pt-5">
      <div className="w-full relative">
        <div className="w-3/4 absolute right-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">Filters</span>
            <span className="text-cyan-600 border-b-[1px]">Clear All</span>
          </div>

          <div className="leading-10">
            {filters?.filterLists?.map((filter) => (
              <>
                <div className="border-b-[1px] border-dotted">
                  <label>{filter}</label>
                  <span className="text-xl text-gray-400 float-right">+</span>
                </div>
                <ul>
                  {filter === "Size" &&
                    filters?.sizes?.map((size) => (
                      <li className="flex items-center border-dotted border-b-[1px]">
                        <input type="checkbox" id="" className="w-4 h-4 mr-3" />
                        <label htmlFor="">{size}</label>
                      </li>
                    ))}
                  {/* <li className='flex items-center border-dotted border-b-[1px]'>
                            <input type='checkbox' id='' className='w-4 h-4 mr-3' /><label htmlFor=''>Medium</label>
                        </li>
                        <li className='flex items-center border-dotted border-b-[1px]'>
                            <input type='checkbox' id='' className='w-4 h-4 mr-3' /><label htmlFor=''>Large</label>
                        </li>
                        <li className='flex items-center border-dotted border-b-[1px]'>
                            <input type='checkbox' id='' className='w-4 h-4 mr-3' /><label htmlFor=''>Extra Large</label>
                        </li> */}
                </ul>
              </>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

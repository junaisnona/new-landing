import React from "react";

function ContactBanner() {
  return (
    <div>
      <div className="grid grid-cols-2 place-items-center bg-purple-300 p-10">
        <div className="w-2/3">
          <span className="block text-3xl mb-5 font-bold">
            Contact Us Now For More Personalized Collection
          </span>
          <button className="block px-5 py-2 rounded-sm btn-secondary font-medium">
            Contact Now
          </button>
        </div>
        <div>
          <div className="w-72 h-64 bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;

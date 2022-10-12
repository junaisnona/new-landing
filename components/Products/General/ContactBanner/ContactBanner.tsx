import React from "react";

function ContactBanner() {
  return (
    <div>
      <div className="flex justify-center items-center gap-x-14 py-6 bg-cyan-500">
        <span className="block text-2xl font-bold">
          Contact Us Now For More Personalized Collection
        </span>
        <button className="block px-5 py-3 rounded-sm btn-secondary font-medium">
          Contact Now
        </button>
      </div>
    </div>
  );
}

export default ContactBanner;

import React from "react";

function ContactForm() {
  return (
    <div>
      <form className="w-[400px] px-8 py-6 rounded-md text-center bg-lime-100">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <div className="flex gap-x-6">
            <label className="flex items-center">
              <input type="radio" value="Business" className="w-4 h-4 mr-2" />
              <span className="text-sm">Business</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="Manufacturer"
                className="w-4 h-4 mr-2"
              />
              <span className="text-sm">Manufacturer</span>
            </label>
            <label className="flex items-center">
              <input type="radio" value="Vendor" className="w-4 h-4 mr-2 " />
              <span className="text-sm">Vendor</span>
            </label>
          </div>
          <label className="flex items-center">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full py-1 px-2 border border-1 border-slate-300 rounded-sm"
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full py-1 px-2 border border-1 border-slate-300 rounded-sm"
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full py-1 px-2 border border-1 border-slate-300 rounded-sm"
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Email"
              className="w-full py-1 px-2 border border-1 border-slate-300 rounded-sm"
            />
          </label>
          <button className="w-full py-1 mt-2 bg-cyan-600 text-white rounded-sm">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

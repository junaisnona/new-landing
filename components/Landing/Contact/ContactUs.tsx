import React from "react";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <div className="p-14">
      <div className="h-full bg-cyan-200 rounded-md p-2 mx-auto flex justify-between">
        <div className="relative top-14 left-20">
          <h2 className="text-2xl font-bold mb-8">Ready To Get Started?</h2>
          <p>Contact us and get all the information that you need</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;

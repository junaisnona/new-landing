import React from "react";

const testimonials = [
  {
    name: "Amit Gupta",
    company: "ABC Fashion",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    name: "Amit Gupta",
    company: "ABC Fashion",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    name: "Amit Gupta",
    company: "ABC Fashion",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    name: "Amit Gupta",
    company: "ABC Fashion",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    name: "Amit Gupta",
    company: "ABC Fashion",
    message:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
];

function Testimonials() {
  return (
    <div>
      <div className="py-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold my-5">Testimonials</h2>
          <p className="w-1/2 leading-7 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </p>
        </div>

        <div className="horizontal-scrollbar grid grid-flow-col overflow-x-scroll gap-x-8 my-5">
          {testimonials.map((person) => (
            <div className="w-[550px] border flex flex-col gap-y-4 p-10 text-center">
              <div className="w-24 h-24 rounded-full bg-slate-400 mx-auto"></div>
              <h4 className="text-2xl font-medium">{person.name}</h4>
              <span className="text-lg font-medium text-gray-700">
                {person.company}
              </span>
              <p className="text-sm text-gray-700">{person.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;


"use client";

import { Accordion } from "flowbite-react";
import { useState } from "react";

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Accordion Item 1",
      content: "This is the content of the first accordion item."
    },
    {
      title: "Accordion Item 2",
      content: "This is the content of the second accordion item."
    },
    {
      title: "Accordion Item 3",
      content: "This is the content of the third accordion item."
    }
  ];
  return (
   

    <div className="rounded-lg p-3">
  {accordionItems.map((item, index) => (
        <div key={index} className="border-b">
          <button
            className="w-full text-left p-4  hover:bg-gray-100 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <span className="text-md font-medium">{item.title}</span>
              <span className="text-lg">{openIndex === index ? '-' : '+'}</span>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
          >
            <div className="p-4 bg-white border-t">
              {item.content}
            </div>
          </div>
        </div>
      ))}
  </div>
  );
}

export default FAQS;
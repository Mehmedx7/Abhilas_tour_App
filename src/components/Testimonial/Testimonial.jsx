import React, { useEffect, useRef, useState } from 'react'

const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      text: 'This is a wonderful service! Highly recommended.',
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      name: 'Jane Smith',
      text: 'Amazing experience! Will definitely come back.',
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      text: 'A truly outstanding and efficient service.',
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 4,
      name: 'Emily Davis',
      text: 'I loved it! Great support and amazing results.',
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 5,
      name: 'William Brown',
      text: 'Best service ever! Exceeded all my expectations.',
      image: 'https://via.placeholder.com/100'
    }
  ];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, 3000); // Change slide every 3 seconds

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <>
<div className="max-w-4xl mx-auto py-12">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 25}%)`,
            width: `${testimonials.length * 25}%`
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="min-w-[25%] p-4">
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
    </>
  )
}

export default Testimonial
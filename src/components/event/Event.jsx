import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images directly
import event1 from "../../assets/images/event1.jpg";
import event2 from "../../assets/images/event2.jpg";
import event4 from "../../assets/images/event4.jpeg";
import event5 from "../../assets/images/event6.jpeg";

const Event = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Array of images and their subtitles
  const images = [
    { src: event1, subtitle: "Award 1" },
    { src: event2, subtitle: "Award 2" },
    { src: event4, subtitle: "Award 3" },
    { src: event5, subtitle: "Award 4" },
  ];

  return (
    <div className="mt-24 p-4 md:p-8 lg:p-12">
      {/* Heading with AOS animation */}
      <h2
        className="text-center text-4xl md:text-5xl font-bold mb-12"
        data-aos="fade-up"
      >
        Our Events
      </h2>

      {/* Image gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative group transition-transform transform hover:scale-105 ${
              index % 2 === 0 ? "md:translate-x-5" : "md:-translate-x-5"
            }`}
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <img
              src={image.src}
              alt={image.subtitle}
              className="w-full h-full max-h-72 md:max-h-80 lg:max-h-96 rounded-lg shadow-lg object-cover object-center transition-transform duration-500 ease-in-out"
              style={{ aspectRatio: "1 / 1" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-70 text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-lg font-semibold">{image.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Spacer before footer */}
      <div className="mb-24"></div>
    </div>
  );
};

export default Event;

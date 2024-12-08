import React, { useEffect } from "react";
import '../../App.css';
import { FaFacebook } from "react-icons/fa"; // Facebook icon

// Import AOS
import AOS from "aos"; // Import the AOS library
import "aos/dist/aos.css"; // Import AOS CSS

// Importing images using import statements
import award1 from "../../assets/images/award1.png";
import award2 from "../../assets/images/award2.png";
import award3 from "../../assets/images/award3.png";

const Awards = () => {

  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1000,
      once: true, // Animation triggers only once
    });
  }, []);
  const awards = [
    {
      image: award1,
      title: "Global Peace Award",
      link: "https://www.facebook.com",
      description: "Click here to know more.",
    },
    {
      image: award2,
      title: "Shanti Samman 2024",
      link: "https://www.facebook.com",
      description: "Learn more about this award.",
    },
    {
      image: award3,
      title: "Excellence in Service",
      link: "https://www.facebook.com",
      description: "Explore details of this achievement.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 mt-28 px-6 lg:px-12">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-black mb-16"data-aos="fade-up"> 
        Our Most Prestigious Awards
      </h2>
      
     
      {/* Container for Images */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {awards.map((award, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            {/* Award Image with Slide and Zoom Effect */}
            <img
              src={award.image}
              alt={award.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-3"
            />

            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
              <h3 className="text-lg font-semibold mb-4">{award.title}</h3>

              {/* Facebook Button */}
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105"
              >
                <FaFacebook className="mr-2" /> Facebook
              </a>

              <p className="mt-4 text-sm px-2">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;

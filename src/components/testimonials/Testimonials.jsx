import React, { useEffect } from "react";

// Import Images
import RajibPal from "../../assets/images/Dr. Rajib Pal.png";
import SantsreeBhattacharya from "../../assets/images/sanshreee mam.png";
import KRajan from "../../assets/images/Team.png";

// Import AOS
import AOS from "aos"; // Import the AOS library
import "aos/dist/aos.css"; // Import AOS CSS

// Sample team member data
const teamMembers = [
  {
    name: "Dr. Rajib Pal",
    role: "Founder & Director",
    image: RajibPal,
    description:
      "Dr. Rajib Pal has made revolutionary contributions in the field of alternative medicine. His deep commitment to community service, especially in raising awareness about HIV, cancer, and nutrition, has made a lasting impact.",
  },
  {
    name: "Santsree Bhattacharya",
    role: "Celebrity Singer & Performer",
    image: SantsreeBhattacharya,
    description:
      'Santsree Bhattacharya has graced the "National Inspiration Award" ceremony organized by the World Book of Star Records. A passionate performer, she inspires audiences globally with her musical talents and heartfelt performances.',
  },
  {
    name: "Dr. K Rajan",
    role: "National General Secretary",
    image: KRajan,
    description:
      "Dr. K Rajan serves as the National General Secretary of Vaikalpik Chikitsa Paddhati Vikas Sanstha, India. He plays an integral role in promoting alternative medicine and holistic health practices across the country.",
  },
];

export default function Testimonials() {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1000,
      once: true, // Animation triggers only once
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Heading */}
      <div className=" text-black py-4 mt-20">
        <h1 className="text-4xl font-bold text-center" data-aos="fade-up">
          Meet Our Team
        </h1>
      </div>

      {/* Card Section */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl relative"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              {/* Card Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto mt-6 object-cover shadow-md border-4 border-zinc-800 transition-transform transform group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800">{member.name}</h2>
                <p className="text-sm font-medium text-red-500 mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-justify">
                  {member.description}
                </p>
              </div>

              {/* Background animation on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200 opacity-0 group-hover:opacity-80 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import '../../App.css';
import 'animate.css'; // For animation effects (optional, add if required)
import AOS from 'aos'; // For scroll animations
import 'aos/dist/aos.css'; // AOS animation styles

AOS.init(); // Initialize AOS for animations

const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 lg:px-12">
      {/* Section Title */}
      <h1
        className="text-5xl font-extrabold text-center text-black mt-8 mb-10 tracking-wide animate__animated animate__fadeInDown"
        data-aos="fade-up"
        data-aos-duration="1000"
      > 
        About Us
      </h1>

      {/* About Text */}
      <div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="text-lg text-gray-700 leading-relaxed mb-6 font-serif">
          <span className="font-bold text-blue-800">
            World Book of Star Records
          </span>{" "}
          is an organization that catalogs and verifies world records across the globe with authentic certification. We inspire individuals to showcase their talents on a global platform.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Between 2011 and 2018, we observed that many talented individuals struggled to gain recognition due to financial constraints. Our mission is to create a platform where talent takes precedence over wealth, providing equal opportunities for everyone. With this vision, we launched{" "}
          <span className="font-bold text-blue-800">World Book of Star Records</span> in 2019.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our inaugural event,{" "}
          <span className="font-bold text-blue-800">World Peace Conference and Global Shanti Samman</span>, was held on 8th December 2019 at Hotel Mangal Regency, Indore. We began this journey by honoring two distinguished personalities:
        </p>

        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li className="mb-2">
            <span className="font-bold">Padma Shri Dr. Vijay Kumar Shah</span> from Sangli, Maharashtra
          </li>
          <li className="mb-2">
            <span className="font-bold">Dr. Bhupendra Vyas</span> from Baroda, Gujarat
          </li>
        </ul>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          In 2020, we recognized several prominent individuals, including:
        </p>

        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li className="mb-2">
            <span className="font-bold">Kumari Eha Dixit</span>, Pradhan Mantri Rashtriya Bal Puraskar awardee from Meerut, Uttar Pradesh
          </li>
          <li className="mb-2">
            <span className="font-bold">Rahul Vohra</span>, Bollywood Actor from Mumbai, Maharashtra
          </li>
          <li className="mb-2">
            <span className="font-bold">Alhaj Arshad Baba</span>, Spiritual Guru from Buldana, Maharashtra
          </li>
          <li className="mb-2">
            <span className="font-bold">Dr. Mini Bodhanwala</span>, CEO of Wadia Group from Mumbai, Maharashtra
          </li>
          <li className="mb-2">
            <span className="font-bold">Shri Shankar Lalwaniji</span>, Member of Parliament, Indore, recognized for his exceptional work during COVID-19
          </li>
        </ul>

        <p className="text-lg text-gray-700 leading-relaxed">
          On 18th April 2021, we hosted another{" "}
          <span className="font-bold text-blue-800">World Peace Conference and Global Shanti Samman</span> at the Sher-e-Kashmir International Conference Centre, Srinagar, Jammu & Kashmir. Our mission continues to be providing a global stage for hidden talents and celebrating excellence worldwide.
        </p>
      </div>
    </div>
  );
};

export default About;

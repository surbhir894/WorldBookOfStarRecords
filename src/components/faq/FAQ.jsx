import React, { useState, useEffect } from "react";

// Import AOS
import AOS from "aos"; // Import the AOS library
import "aos/dist/aos.css"; // Import AOS CSS

export default function FAQ() {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1000, // Set the duration of the animation
      once: true, // Animation triggers only once
    });
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  // State to track which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // Questions and answers data
  const faqData = [
    {
      question: "What is World Book of Star Records Organization?",
      answer:
        "World Book Star Records Organization is an organization that conducts award ceremonies to honor talented individuals and showcase their achievements in front of other distinguished personalities.",
    },
    {
      question: "What is the working process of World of Book Star Records Organization?",
      answer:
        "The organization requires nominees to fill out a detailed form with their achievements. A jury team then evaluates these achievements to determine if the nominee has made notable contributions in their respective field. If so, they are honored at the award ceremony.",
    },
    {
      question: "How can someone be nominated for awards by World Book of Star Records Organization?",
      answer:
        "To nominate someone for awards by World Book of Star Records Organization, the nominee must visit the official website or designated platform to fill out a nomination form. The jury team will assess their achievements and if deemed deserving, they will be awarded.",
    },
    {
      question: "What categories of awards does World Book of Star Records Organization offer?",
      answer:
        "World Book of Star Records Organization offers awards in various categories such as sports, arts, science, entertainment, and more. Winners receive certificates, trophies, and other forms of recognition at the award ceremony.",
    },
    {
      question: "What are the benefits of receiving awards from World Book of Star Records Organization?",
      answer:
        "Winning awards from World Book of Star Records Organization helps recognize and showcase the talent of the recipients. It also provides them with global exposure and potential opportunities to further advance in their respective fields.",
    },
  ];

  // Toggle the open/close for each question
  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if the same question is clicked again
    } else {
      setOpenIndex(index); // Open the clicked question
    }
  };

  return (
    <div className="faq-container-fluid px-4 md:px-16 mt-16">
      {/* FAQ Header */}
      <div className="faq-header bg-slate-800 text-white text-center py-4 rounded-md mb-8" data-aos="fade-up">
        <h2 className="text-2xl font-bold">FAQ</h2>
      </div>

      {/* FAQ Table */}
      <div className="faq-table divide-y divide-gray-300">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="faq-row"
            data-aos="fade-up" // This is where the fade-up effect is applied
            data-aos-delay={`${index * 200}`} // Apply a delay for each FAQ item
          >
            {/* Question with the toggle button */}
            <div
              className="faq-question flex items-center justify-between py-4 px-6 bg-gray-50 cursor-pointer hover:bg-gray-100 rounded-md"
              onClick={() => handleToggle(index)}
            >
              <div className="text-xl font-semibold text-gray-800 flex items-center">
                <div className="text-xl font-bold text-indigo-900 mr-4">
                  {openIndex === index ? "-" : "+"}
                </div>
                {item.question}
              </div>
            </div>

            {/* Answer */}
            {openIndex === index && (
              <div className="faq-answer py-4 px-6 text-gray-600 bg-gray-100 rounded-md" data-aos="fade-left">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

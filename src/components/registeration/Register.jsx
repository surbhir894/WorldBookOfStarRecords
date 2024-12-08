


import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for API requests
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    guardianName: '',
    email: '',
    phone: '',
    dob: '',
    organization: '',
    qualification: '10th',
    qualificationDocuments: null,
    specialQualification: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    passportPhoto: null,
    consent: false,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration
      once: true, // Animation triggers only once
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Create FormData to send files and other data
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] instanceof File) {
        formDataToSend.append(key, formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        'http://localhost:5000/register',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      alert('Registration successful!');
      console.log('Success:', response.data); // Handle success
      clearForm(); // Clear the form after successful submission
    } catch (error) {
      alert('Error occurred during registration.');
      console.error('Error:', error.response || error.message); // Handle error
    }
  };

  // Clear form function
  const clearForm = () => {
    setFormData({
      name: '',
      guardianName: '',
      email: '',
      phone: '',
      dob: '',
      organization: '',
      qualification: '10th',
      qualificationDocuments: null,
      specialQualification: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      passportPhoto: null,
      consent: false,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex  mb-8 flex-col">
      <header className="bg-blue-600 py-4">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-4xl font-bold">Registration</h1>
        </div>
      </header>

      <div className="flex-1">
        <div className="max-w-4xl mx-auto p-8 mt-10 bg-white rounded shadow-lg">
          <h2 className="text-3xl font-bold text-center mt-8 text-gray-800 mb-6" data-aos="fade-up">
            Registration Form
          </h2>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Name */}
            <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <label htmlFor="name" className="block text-gray-700">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                placeholder="E.g. John Doe"
                required
              />
            </div>

            {/* Guardian Name */}
            <div className="mb-4" data-aos="fade-up" data-aos-delay="400">
              <label htmlFor="guardianName" className="block text-gray-700">Guardian Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                id="guardianName"
                name="guardianName"
                value={formData.guardianName}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                placeholder="E.g. Mr. Richard"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4" data-aos="fade-up" data-aos-delay="600">
              <label htmlFor="email" className="block text-gray-700">Email Address <span className="text-red-500">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                placeholder="E.g. john@doe.com"
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-4" data-aos="fade-up" data-aos-delay="800">
              <label htmlFor="phone" className="block text-gray-700">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                placeholder="E.g. +91 9876543210"
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-4" data-aos="fade-up" data-aos-delay="1000">
              <label htmlFor="dob" className="block text-gray-700">Date of Birth <span className="text-red-500">*</span></label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                required
              />
            </div>
              {/* Organization */}
              <div className="mb-4"data-aos="fade-up" data-aos-delay="1000">
                    <label htmlFor="organization" className="block text-gray-700">Organization<span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                        placeholder="E.g. Organization Name"
                    />
                </div>


                   {/* Qualification */}
                   <div className="mb-4"data-aos="fade-up" data-aos-delay="1000">
                   <label htmlFor="organization" className="block text-gray-700">Qualification<span className="text-red-500">*</span></label>
                    <select
                        id="qualification"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                        required
                    >
                        <option value="10th">10th</option>
                        <option value="12th">12th</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Post Graduate">Post Graduate</option>
                        <option value="Ph.D">Ph.D</option>
                    </select>
                </div>
    
                {/* Upload Documents */}
                <div className="mb-4"data-aos="fade-up" data-aos-delay="1000">
                    <label htmlFor="organization" className="block text-gray-700">qualificationDocuments<span className="text-red-500">*</span></label>
                    <input
                        type="file"
                        id="qualificationDocuments"
                        name="qualificationDocuments"
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                    />
                </div>
    
                {/* Special Qualification */}
                <div className="mb-4"data-aos="fade-up" data-aos-delay="1000">
                <label htmlFor="organization" className="block text-gray-700">specialQualification<span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="specialQualification"
                        name="specialQualification"
                        value={formData.specialQualification}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                        placeholder="E.g. Special Qualification"
                    />
                </div>
    
                {/* Address */}
                <div className="mb-4"data-aos="fade-up" data-aos-delay="1000">
                <label htmlFor="organization" className="block text-gray-700">streetAddress<span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="streetAddress"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                        placeholder="E.g. 42 Wallaby Way"
                        required
                    />
                </div>
    
                {/* City */}
                <div className="mb-4"data-aos="fade-up" data-aos-delay="1000">
                    <label htmlFor="organization" className="block text-gray-700">City<span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                        placeholder="E.g. Sydney"
                        required
                    />
                </div>
    
                {/* State */}
                <div className="mb-4"data-aos="fade-up" data-aos-delay="1000">
                <label htmlFor="organization" className="block text-gray-700">State<span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                        placeholder="E.g. NSW"
                        required
                    />
                </div>
    
                {/* Zip Code */}
                <div className="mb-4"data-aos="fade-up" data-aos-delay="1000">
                <label htmlFor="organization" className="block text-gray-700">Zip code<span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                        placeholder="E.g. 2000"
                    />
                </div>
    
                {/* Country */}
                <div className="mb-4"data-aos="fade-up" data-aos-delay="1000">
                    <label htmlFor="organization" className="block text-gray-700">Country<span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                        placeholder="E.g. Australia"
                        required
                    />
                </div>
    
                {/* Passport Photo */}
                <div className="mb-4"data-aos="fade-up" data-aos-delay="1000">
                <label htmlFor="organization" className="block text-gray-700">Passport Photo<span className="text-red-500">*</span></label>
                    <input
                        type="file"
                        id="passportPhoto"
                        name="passportPhoto"
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400"
                    />
                </div>
    
                {/* Consent */}
                
                <div className="mb-4  flex items-center"data-aos="fade-up" data-aos-delay="1000">
               
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mr-2"
                        required
                    />
                    <label htmlFor="consent" className="text-gray-700">I agree to the terms and conditions</label>
                </div>
    

            {/* Submit Button */}
            <div className="flex justify-end" data-aos="fade-up" data-aos-delay="1200">
              <button
                type="submit"
                className="py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      
    </div>
  );
};

export default Register;







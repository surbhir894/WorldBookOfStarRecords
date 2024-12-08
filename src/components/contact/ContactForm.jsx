import { useState } from "react";
import { AiOutlineMail, AiOutlineEnvironment } from "react-icons/ai";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading indicator

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true); // Show "Submitting..." message immediately

      try {
        const response = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Message sent successfully!"); // Show success alert
          // Reset the form data after successful submission
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            phone: "",
            message: "",
          });
        } else {
          alert("Failed to send message. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false); // Hide "Submitting..." message after request completes
      }
    }
  };

  // Handle the Mail Icon click
  const handleMailClick = () => {
    window.location.href = `mailto:worldbookofstarrecord@gmail.com`;
  };

  // Handle the Location Icon click
  const handleLocationClick = () => {
    const address = "A/11, 2nd Floor, Pandit Din Dayal, Upadhyay Nagar, Sukhliya, Indore M.P. 452010";
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
    window.open(mapUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="container-fluid bg-white shadow-lg rounded-lg w-full max-w-6xl">
        {/* Top Row - Message Us */}
        <div className=" bg-slate-800 text-white text-center py-4 rounded-t-lg">
          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>

        <div className="flex flex-col md:flex-row p-6">
          {/* Left Side - Write Us */}
          <div className="flex-1 flex flex-col justify-center items-center border-r border-gray-300 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 text-center">Write Us</h2>
            <div className="space-y-6 text-lg text-gray-800 font-bold">
              <div
                className="flex items-center cursor-pointer hover:text-red-500 transition duration-300"
                onClick={handleMailClick}
              >
                <AiOutlineMail className="text-2xl mr-2 text-blue-500 hover:text-red-500" />
                <span>worldbookofstarrecord@gmail.com</span>
              </div>
              <div
                className="flex items-center cursor-pointer hover:text-red-500 transition duration-300"
                onClick={handleLocationClick}
              >
                <AiOutlineEnvironment className="text-2xl mr-2 text-blue-500 hover:text-red-500" />
                <div>
                  <p>A/11, 2nd Floor, Pandit Din Dayal,</p>
                  <p>Upadhyay Nagar,</p>
                  <p>Sukhliya, Indore M.P. 452010</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Message Us Form */}
          <form
            className="flex-1 bg-gray-50 border border-gray-300 p-6 rounded-lg md:ml-6"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Message Us</h2>
            <div className="grid grid-cols-1 gap-4">
              <InputField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
              <InputField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <InputField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                error={errors.address}
              />
              <InputField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  rows="4"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
            </div>

            {/* Show the "Submitting..." text when the form is being submitted */}
            {isSubmitting && <p className="text-center text-blue-500 mt-4">Submitting...</p>}

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded"
                disabled={isSubmitting} // Disable the button when submitting
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, name, value, onChange, error }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

import React, { useState } from 'react';

const Demoregister = () => {
  // State to store form values
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');

  // State to manage form submission
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can handle form data (e.g., send to an API)
    console.log({ name, phone, course });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 bg-blue-900 text-white py-3">Enroll For Free Demo</h2>

        {submitted && (
          <div className="mb-4 text-green-500 text-center">
            <p>Form submitted successfully!</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 outline-none py-2 border  "
            />
          </div>

          {/* Phone Number Input */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="\d{10}"
              placeholder="1234567890"
              className="w-full px-4 py-2 border  focus:outline-none "
            />
            <small className="text-gray-500">Format: 1234567890</small>
          </div>

          {/* Course Dropdown */}
          <div className="mb-4">
            <label htmlFor="course" className="block text-lg font-semibold text-gray-700">Course</label>
            <select
              id="course"
              name="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
              className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a Course</option>
              <option value="Selenium WebDriver">Selenium WebDriver</option>
              <option value="Cypress Framework">Cypress Framework</option>
              <option value="API Testing with Postman">API Testing with Postman</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-5 py-3 bg-orange-500 text-white text-xl"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Demoregister;

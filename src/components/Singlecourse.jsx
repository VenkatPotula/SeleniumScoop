import React from 'react'

const Singlecourse = () => {
  return (
    <div>
    <div className="w-96  bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Course"
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">Selenium WebDriver</h3>
                <p className="text-gray-600 mt-2">
                  Learn the fundamentals of Selenium WebDriver to automate web applications using Java.
                  Build real-world test automation scripts with ease!
                </p>
        
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span className="font-semibold text-gray-700">Instructor:</span>
                  <span className="ml-2">John Doe</span>
                </div>
        
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <span className="font-semibold text-gray-700">Duration:</span>
                  <span className="ml-2">4 Weeks</span>
                </div>
        
                <div className="mt-4">
                  <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div></div>
  )
}

export default Singlecourse
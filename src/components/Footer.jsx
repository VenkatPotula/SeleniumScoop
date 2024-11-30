import React, { useState } from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-900 text-white py-5 bottom-0 relative w-full">
      <div className="w-[90%] md:w-[70%]  mx-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-24 gap-12 my-10">
          {/* Column 1: Logo / Branding */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-300 mb-4 md:text-left text-center">
              Selenium Scoop
            </h2>
            <p className="text-gray-400 text-center md:text-left">
              Empowering the next generation of testers through hands-on
              learning and innovative techniques.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex  flex-col items-center">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="gap-3 flex">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="text-gray-400 hover:text-white">
                  Courses
                </a>
              </li>

              {/* <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li> */}
            </ul>
          </div>

          {/* Column 3: Social Media */}
          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 2H2v20h20V2zM12 5h7v14H5V5h7V3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-9z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 2a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-4 4a9 9 0 0 0-9-9h-1.5a1.5 1.5 0 0 0-1.5 1.5v13h6v-7h-3v-4h3v-2c0-3.28 2.46-5.47 5.57-5.47 1.66 0 3.43.29 3.43.29v3.5h-2.08c-1.7 0-2.2.98-2.2 2.01v2.5h3.5l-.5 4h-3v7h6v-9c0-5-5-9-9-9z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12v2m0 4v2m0-10V4m4 12l2-2m-4 4l2 2m4-8l-2 2m0 8l-2-2"/>
                </svg>
              </a>
            </div>
          </div> */}

          {/* Column 4: Contact Information */}
          <div className="md:text-left text-center">
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                {" "}
                <a
                  href="mailto:seleniumscoop@gmail.com"
                  className="hover:text-white"
                >
                  seleniumscoop@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                {" "}
                <a href="tel:+919705253365" className="hover:text-white">
                  +91 9347938040
                </a>
              </li>
              {/* <li className="text-gray-400">Address: 123 Automation St, Tech City, CA</li> */}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-4 border-t border-gray-700 pt-3 text-center text-gray-400 md:text-[15px] text-sm">
          <p>&#169; Selenium Scoop. All Rights Reserved.2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import contactImage from "../assets/content3.jpg";
import { faAt, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="relative bg-gray-200 py-24 sm:py-36" id="contact">
        <div class="custom-shape-divider-top-1732443000">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20 sm:w-[70%] w-[90%] mx-auto">
          {/* Left Side - Image */}
          <div className="w-full">
            <img
              src={contactImage}
              alt="Contact Us"
              className="h-full w-full object-cover rounded shadow-sky-800 border-sky-600 border shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full ">
            <div className="flex gap-7">
              <h1 className="text-4xl md:text-3xl font-bold text-orange-800 ">
                Contact Us
              </h1>
              <FontAwesomeIcon
                icon={faPhoneVolume}
                size="4xl"
                className="text-4xl text-orange-800 "
              />
            </div>
            <p className="text-gray-600 text-lg my-10  tracking-widest">
              Feel free to give us a call or send us WhatsApp message with your
              questions or comments.
            </p>
            <p className="text-gray-600 text-lg my-10  w-76 tracking-widest">
              We are here to help you in any problems with fast solution
            </p>

            {/* WhatsApp Section */}
            <div className="flex items-center space-x-16 mt-4">
              <a
                href="https://wa.me/9347938040"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-800 text-white text-md font-semibold py-2 w-[70%] sm:w-[60%] text-center rounded"
              >
                {" "}
                <p>Chat with us</p>
              </a>

              <a
                href="https://wa.me/9347938040"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-gray-700 hover:underline"
              >
                <div className="flex items-center justify-center  w-10 h-10 rounded-full bg-green-600 hover:bg-green-500 text-white shadow-lg">
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1732442546">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Contact;

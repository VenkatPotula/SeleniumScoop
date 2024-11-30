import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";

const About = () => {
  // State to track when the animation should trigger
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when the component is mounted
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Delay of 300ms before the animation starts

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div>
      <div className="font-sans  w-[80%] mx-auto mt-52">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto  shadow-lg rounded-lg overflow-hidden my-8">
          {/* About Image */}
          <div className=" flex bg-center">
            <img
              src="https://testsigma.com/blog/wp-content/uploads/A-Complete-Guide-to-Selenium-Grid-4-Architecture-and-Configuration-1.jpg"
              alt="About Us Image"
              className="h-[380px] w-[600px] object-contain bg-center rounded-t-lg"
            />

            <div className="p-3">
              <h2 className="text-3xl text-blue-600 font-semibold">
                Who We Are
              </h2>
              <p className="text-lg text-white leading-relaxed">
                We are a passionate team dedicated to providing the best
                services and experiences for our customers. With years of
                experience and a deep commitment to excellence, we strive to
                push the boundaries of innovation and provide top-notch
                solutions tailored to your needs. Whether it's through our
                cutting-edge technology or our personalized customer service, we
                aim to make a lasting impact.
              </p>
            </div>
          </div>

          {/* Mission and Vision Sections */}
          <div className="p-3">
            <h3 className="text-2xl text-blue-600 font-semibold">
              Our Mission
            </h3>
            <p className="text-lg text-white leading-relaxed">
              Our mission is to empower individuals and businesses by delivering
              innovative products and services that enhance their day-to-day
              lives. We believe in sustainability, growth, and making a positive
              difference in the world through our actions and partnerships.
            </p>

            <h3 className="text-2xl text-blue-600 font-semibold">Our Vision</h3>
            <p className="text-lg text-white leading-relaxed">
              Our vision is to be recognized as a leader in our industry,
              providing unparalleled services that create long-lasting value for
              our customers. We aim to build a global community that believes in
              progress, collaboration, and a future driven by innovation.
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slideFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .slide-in-right {
          animation: slideFromRight 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default About;

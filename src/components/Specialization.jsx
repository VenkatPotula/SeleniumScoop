// SpecializationComponent.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Specialization = () => {
  return (
    <div className=" justify-center items-center  bg-gray-100 max-w-7xl mx-auto grid grid-cols-2 gap-3 pt-5">
      {/* Motion div for content with left-to-right animation */}
      <motion.div
        className="p-6 bg-white shadow-lg rounded-lg w-full "
        initial={{ x: '-100%' }} // Start off-screen to the left
        animate={{ x: 0 }}       // Animate to the center (right)
        exit={{ x: '100%' }}     // Exit to the right (if required)
        transition={{ type: 'spring', stiffness: 50 }} // Smooth animation with spring
        data-testid="specialization-component"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center" data-testid="title">
          Specialization Component
        </h2>
        <p className="text-gray-700 mb-4" data-testid="content">
          This is a component with sliding animation. The content slides in from the left to the right
          when it mounts. It's a simple example of how to use Framer Motion for animations in a React app.
        </p>
        <motion.button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none w-full"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          data-testid="specialization-button"
        >
          Click Me
        </motion.button>
      </motion.div>
      <motion.div
        className="p-6 bg-white shadow-lg rounded-lg w-full "
        initial={{ x: '100%' }} // Start off-screen to the left
        animate={{ x: 0 }}       // Animate to the center (right)
        exit={{ x: '100%' }}     // Exit to the right (if required)
        transition={{ type: 'spring', stiffness: 50 }} // Smooth animation with spring
        data-testid="specialization-component"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center" data-testid="title">
          Specialization Component
        </h2>
        <p className="text-gray-700 mb-4" data-testid="content">
          This is a component with sliding animation. The content slides in from the left to the right
          when it mounts. It's a simple example of how to use Framer Motion for animations in a React app.
        </p>
        <motion.button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none w-full"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          data-testid="specialization-button"
        >
          Click Me
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Specialization;

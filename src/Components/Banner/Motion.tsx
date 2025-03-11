import React from "react";

import { motion } from "framer-motion";
// import { image } from "../../assets/azir.jpg";

export default function Motion() {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      className="w-md flex justify-end"
      initial={{ x: 50, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="relative w-full max-w-2xl">
        {" "}
        <img
          alt="image"
          className="object-cover rounded-xl"
          height={500}
          src="https://i.ibb.co/9Vx9Hvt/azir.jpg"
          //   src={image}
          width={500}
        />
      </div>
    </motion.div>
  );
}

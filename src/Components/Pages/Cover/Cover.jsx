import { Link } from "react-router-dom";
import Motion from "../../Banner/Motion";

const Cover = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Animated Image or Motion Component */}
        <div className="flex justify-center">
          <Motion />
        </div>

        {/* Content Box */}
        <div className="bg-white/10 backdrop-blur-lg shadow-xl border border-white/20 p-16 rounded-lg max-w-xl">
          <h2 className="text-4xl font-extrabold text-gray-300">
            Hi there, I am
          </h2>
          <h1 className="text-6xl font-extrabold text-cyan-400 animate-pulse">
            AZIR UDDIN,
          </h1>
          <p className="py-6 text-lg italic text-gray-300">
            I am a passionate and detail-oriented Front-End Developer currently
            living in Dublin, Ireland. With a deep love for building clean,
            intuitive, and user-friendly web applications, I specialize in
            crafting modern, responsive websites using the latest technologies
            like React, TypeScript, Tailwind CSS, Redux, NextJS.
          </p>
          <p className="text-lg text-gray-300">
            Over the years, I have honed my skills in creating visually stunning
            and high-performing websites that offer seamless user experiences.
            My approach revolves around writing clean, maintainable code,
            keeping accessibility in mind, and constantly learning to stay ahead
            of industry trends.
          </p>
          {/* <p className="text-lg text-gray-300">
            My passion lies not only in bringing designs to life but also in
            solving problems through technology. Whether it's building
            e-commerce platforms, interactive dashboards, or portfolio websites,
            I aim to deliver solutions that exceed expectations.
          </p> */}
          {/* <p className="text-lg text-gray-300">
            I'm always open to new challenges and collaborations, and I thrive
            in environments where I can continue learning and growing as a
            developer. Let's connect and build something amazing together!
          </p> */}

          {/* Resume Link */}
          <p className="text-xl py-4">
            My Resume:{" "}
            <Link
              to="https://docs.google.com/document/d/1zcNDl5ngHQzpJMV934Vn_8QSPyUGKSmg/edit?usp=sharing&ouid=109100266312990769774&rtpof=true&sd=true"
              className="text-orange-400 hover:text-orange-500 underline transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click to view
            </Link>
          </p>

          {/* Contact Button */}
          <Link to="/contacts">
            <button className="mt-4 px-6 py-3 text-lg font-semibold bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 rounded-full shadow-lg">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cover;

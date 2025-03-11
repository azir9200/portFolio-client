const About = () => {
  return (
    <div className="flex-col lg:flex-row bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 min-h-screen">
      <div className="text-center py-20">
        <h2 className="text-5xl font-extrabold text-white">About Myself</h2>
      </div>

      <div className="lg:max-w-4xl mx-auto bg-white p-8 border-t-4 border-cyan-500 rounded-lg shadow-lg">
        {/* First Section */}
        <div className="space-y-6 mb-12">
          <h1 className="text-lg lg:text-xl font-semibold text-gray-700">
            I am Azir Uddin, a passionate Frontend Developer with a strong
            foundation in creating dynamic, responsive, and user-friendly
            websites. Born in Bangladesh and having lived in England, Portugal,
            Switzerland, and now in Ireland. I bring a unique blend of global
            perspective and diverse experiences to my work.
          </h1>
        </div>

        {/* Second Section */}
        <div className="space-y-6 mb-12">
          <p className="text-lg lg:text-xl font-medium text-gray-700">
            My journey into web development began with a deep curiosity about
            how websites are built and the impact they can have on users. I am
            proficient in HTML, CSS, JavaScript, and modern frontend frameworks
            such as React and Next.js. I focus on creating clean, maintainable,
            and scalable code while ensuring an excellent user experience across
            all devices.
          </p>
        </div>

        {/* Third Section */}
        <div className="space-y-6">
          <p className="text-lg lg:text-xl font-medium text-gray-700">
            As a developer, I am continuously learning and evolving. I am always
            exploring new tools, frameworks, and best practices to stay
            up-to-date with industry trends.
          </p>
        </div>

        {/* Fourth Section */}
        <div className="space-y-6">
          <p className="text-lg lg:text-xl font-medium text-gray-700">
            Outside of coding, I enjoy collaborating with teams, brainstorming
            ideas, and finding creative solutions to problems. I’m excited about
            the opportunity to contribute to a forward-thinking company where I
            can continue growing as a developer and help create amazing digital
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

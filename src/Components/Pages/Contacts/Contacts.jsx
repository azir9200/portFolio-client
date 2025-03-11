import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Feel free to reach out through this form or via social platforms.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex justify-center gap-6 text-3xl">
              <Link
                to="https://www.facebook.com/azirzaif/about"
                className="text-blue-600 text-5xl hover:text-blue-800 transition transform hover:scale-110"
              >
                <FaFacebook />
              </Link>
              <Link
                to="https://www.linkedin.com/in/azir9200"
                className="text-blue-700 text-5xl  hover:text-blue-900 transition transform hover:scale-110"
              >
                <FaLinkedin />
              </Link>
              <Link
                to="https://github.com/azir9200"
                className="text-gray-800 text-5xl  hover:text-black transition transform hover:scale-110"
              >
                <FaGithub />
              </Link>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>📍 Address:</strong> 13, New Ireland Road, Dublin-8
              </p>
              <p>
                <strong>📧 Email:</strong>{" "}
                <Link
                  to="mailto:aziruddin83@gmail.com"
                  className="text-teal-600 hover:underline"
                >
                  aziruddin83@gmail.com
                </Link>
              </p>
              <p>
                <strong>📞 Mobile:</strong> 00353 838485737
              </p>
              <p>
                <strong>💬 WhatsApp:</strong> 00353 838485737
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

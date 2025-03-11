import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link
          to="/"
          className="text-white hover:text-cyan-400 transition-all duration-300"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="text-white hover:text-cyan-400 transition-all duration-300"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/mySkills"
          className="text-white hover:text-cyan-400 transition-all duration-300"
        >
          My Skills
        </Link>
      </li>
      <li>
        <Link
          to="/contacts"
          className="text-white hover:text-cyan-400 transition-all duration-300"
        >
          Contacts
        </Link>
      </li>
    </>
  );

  return (
    <div className="mb-2">
      <div className="navbar fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-600 via-teal-500 to-blue-600 shadow-lg">
        <div className="navbar-start flex justify-between items-center w-full px-4 py-2">
          {/* Mobile Dropdown */}
          <div className="dropdown bg-blue-400 lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-6 z-[1] p-2 shadow-lg bg-slate-400 text-xl font-bold rounded-lg w-52"
            >
              {navItems}
            </ul>
          </div>

          {/* Logo or Branding (optional) */}
          <Link
            to="/"
            className="btn btn-ghost text-white text-xl font-semibold"
          >
            Azir
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white text-xl mx-auto font-semibold">
            {navItems}
          </ul>
        </div>

        {/* Navbar End (optional right-side items) */}
        <div className="navbar-end">
          <a
            href="https://github.com/azir9200"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 transition-all duration-300 rounded-full"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

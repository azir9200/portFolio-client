import { Link } from "react-router-dom";
import Contacts from "../Contacts/Contacts";


const Navbar = () => {

  const navItems = <>
  <li><Link to="/">Home</Link> </li>
  <li> <Link to="/about">About Myself</Link> </li>  
   <li><Link to="/mySkills">My Skills</Link></li>
   <li> <Link to="/contacts">Contacts</Link> </li> 
</>

  return (
    <div>
      <div className="navbar  fixed">
       <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-xl font-semibold px-1">
     {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn"></a>
  </div>
</div>

    </div>
  );
};

export default Navbar;
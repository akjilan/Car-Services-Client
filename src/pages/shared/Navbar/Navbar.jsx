import React, { useContext } from "react";
import logo from "../../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOutButton = () => {
    signOutUser()
      .then(() => {
        alert("Sign Out Successfull");
      })
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li className="font-bold text-md tracking-wide uppercase">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold text-md tracking-wide uppercase">
        <Link to="/about">About</Link>
      </li>
      <li className="font-bold text-md tracking-wide uppercase">
        <Link to="/services">Services</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar z-10 sticky top-0 bg-slate-100">
        <div className="navbar-start">
          <div className="dropdown bg-white">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu bg-slate-50 menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <img src={logo} alt="" className="w-16 h-auto" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-sm  btn-outline btn-warning text-warning uppercase">
            Appointment
          </a>
          {user ? (
            <Link
              // to="/login"
              onClick={handleSignOutButton}
              className="btn btn-sm  btn-outline btn-warning text-warning ml-3 uppercase"
            >
              Sign Out
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm  btn-outline btn-warning text-warning ml-3 uppercase"
            >
              login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

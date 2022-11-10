import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../../Context/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(AuthProvider);
  const navigate = useNavigate();
  const handleSignOut = () => {
    const agree = window.confirm("Are you want to log out?");
    if (!agree) {
      return;
    }
    logOut()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  const menu = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold">
        <Link to="/blogs">Blogs</Link>
      </li>

      {user?.email ? (
        <>
          <li className="font-semibold">
            <Link to="/myreview">My Reviews</Link>
          </li>
          <li className="font-semibold">
            <Link to="/addservice">Add Service</Link>
          </li>
          <li onClick={handleSignOut} className="font-semibold">
            <Link>Sign Out</Link>
          </li>
        </>
      ) : (
        <>
          <li className="font-semibold">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case font-bold  text-2xl">
          ZahidographY
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.imageURL} alt="" />
            </div>
          </div>
        ) : (
          <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute -left-1 w-12 h-12 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

      const Name = user ? user.displayName : "Guest";

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/alltoys">All Toys</Link>{" "}
      </li>
      <>
        <li>
          <Link to="/mytoys">My Toys</Link>
        </li>
        <li>
          <Link to="/addtoy">Add A Toys</Link>
        </li>
        <li>
          {" "}
          <Link to="/blogs">Blogs</Link>{" "}
        </li>
      </>
      {user ? (
        <li>
          {" "}
          <button onClick={handleLogOut}>Log out</button>{" "}
        </li>
      ) : (
        <li>
          {" "}
          <Link to="/login">Login</Link>{" "}
        </li>
      )}
    </>
    
  );
  return (
    <div className="navbar bg-base-400 h-28 mb-2">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <img
            className="h-40 w-40"
            src="https://1000logos.net/wp-content/uploads/2020/11/Disney-Princess-Logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div
          className="avatar tooltip tooltip-secondary tooltip-left"
          data-tip={Name}
        >
          {user && (
            <div className="w-16 mr-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL || ""} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

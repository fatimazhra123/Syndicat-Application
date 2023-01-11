import React from "react";
import {
  HiMenuAlt2,
  FaUserCircle,
  HiMenuAlt3,
  BiSearch,
} from "../../../assets/icons";

function Navbar() {
  return (
    <div className="navbar bg-gray-800 text-white">
      <div className="navbar-start">
        
      </div>
      <div className="navbar-end flex">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered input-xs text-black"
            />
            <button className="btn btn-square btn-xs">
              <BiSearch size={24} />
            </button>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="rounded-full">
              <FaUserCircle size={24} className="cursor-pointer" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <p className="justify-between">
                Profile<span className="badge">Edit</span>
              </p>
            </li>
            <li>
              <p>Settings</p>
            </li>
            <li>
              <p>Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
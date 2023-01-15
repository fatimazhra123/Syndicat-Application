import React, {useContext} from "react";
// import Logout from '../shared/Navbar'
import {
  HiMenuAlt2,
  FaUserCircle,
  HiMenuAlt3,
  BiSearch,
} from "../../../assets/icons";
import { UserContext } from "../../../userContext/UserContext";


function Navbar() {
  const {auth} = useContext(UserContext)
  console.log(auth);


  

function logout() {

  localStorage.clear();
  window.location.replace('http://localhost:3000/')

}
  return (
    <div className="navbar bg-purple-800 text-white">
      <div className="navbar-start">
        
      </div>
      <div className="navbar-end flex bg-purple">
  
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
       <h2>{auth.Username ? auth.Username : 'Admin'} </h2>
      <button className="mx-4 btn btn-muted" onClick={logout} >Logout</button>
      </div>
    </div>
  );
}

export default Navbar
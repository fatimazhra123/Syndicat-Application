import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiMenuAlt2,
  HiMenuAlt3,
  MdOutlineDashboard,
  RiShoppingBasket2Line,
  BiMessageSquare,
  FiUsers,
  AiOutlineTag,
  IoPricetagsOutline,
  MdOutlineAnalytics,
  AiOutlineFileText,
  AiOutlineSetting,
  IoMdLogOut,
  BsBuilding,
  AiOutlineHome,
  MdPayment,
} from "../../../assets/icons";

function Sidebar() {

  const menus = [
    {
      name: "Dashboard",
      Link: "/dashboard",
      icon: MdOutlineDashboard,
      margin: true,
    },
    { name: "Clients", Link: "/dashboard/client", icon: FiUsers, margin: true },
 
    {
      name: "Appartements",
      Link: "/dashboard/appartement",
      icon: AiOutlineHome,
    },
    {
      name: "Paiements",
      Link: "/dashboard/paiement",
      icon: MdPayment,
      margin: true,
    },
    {
      name: "Réglages",
      Link: "/dashboard/reglage",
      icon: AiOutlineSetting,
      margin: true,
    },
    { name: "Se déconnecter", Link: "/", icon: IoMdLogOut },
  ];
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`bg-purple-800 h-screen ${ open ? "w-56" : "w-16"} duration-500 text-gray-100 px-3`}
    >
      <div className="pt-1 flex flex-col gap-4 relative">
        <div className="flex justify-start swap swap-rotate">
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={() => setOpen(!open)} />
            <HiMenuAlt3
              size={24}
              className="cursor-pointer swap-off fill-current"
            />
            <HiMenuAlt2
              size={24}
              className="cursor-pointer swap-on fill-current"
            />
          </label>
          <p className="btn btn-ghost normal-case text-xl">Syndicat</p>
          <image ></image>
        </div>
        <hr className="p-0" />
        {menus?.map((menu, i) => (
          <Link
            to={menu?.Link}
            key={i}
            className={`${
              menu?.margin && "mt-5"
            } group flex items-center text-sm gap-3 font-medium p-2 hover:bg-color-primary rounded-md`}
          >
            <div>{React.createElement(menu?.icon, { size: "24" })}</div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hideen"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;

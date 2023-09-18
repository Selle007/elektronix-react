import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../../../app/assets/logo.png";

export function Sidebar() {
  const inactiveLink = "flex gap-1 p-1 font-semibold hover:text-blue-500";
  const activeLink = inactiveLink + " text-blue-500";

  const location = useLocation();

  const isActiveLink = (linkUrl) => {
    return location.pathname === linkUrl ? true : false;
  };

  return (
    <aside className="text-black px-4 bg-gray-100 border-r-2 ">
      <Link to={"/"} className=" flex gap-1 mb-4 mr-4" href="/">
        <img src={logo} alt="Elektronix Logo" className="w-48" />
      </Link>
      <nav className="flex flex-col gap-2">
        <Link
          to={"/dashboard"}
          className={isActiveLink("/dashboard") ? activeLink : inactiveLink}
        >
          Dashboard
        </Link>
        <Link
          to={"/dashboard/products"}
          className={
            isActiveLink("/dashboard/products") ? activeLink : inactiveLink
          }
        >
          Products
        </Link>
        <Link
          to={"/dashboard/categories"}
          className={
            isActiveLink("/dashboard/categories") ? activeLink : inactiveLink
          }
        >
          Categories
        </Link>
      </nav>
    </aside>
  );
}

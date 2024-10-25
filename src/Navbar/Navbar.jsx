import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
// icons
import { SlOptions, SlArrowUp } from "react-icons/sl";

export const Navbar = () => {
  //openmenu
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  // close menu mobile when change the path
  const { pathname } = useLocation();
  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);
  return (
    <section className="z-50 w-full bg-zinc-800  text-gray-200 h-20 px-4 md:px-10 flex items-center sticky top-0 justify-between">
      <Link
        to="/"
        className="text-nowrap fontcode w-80 font-semibold text-md md:text-lg "
      >
        <span className="text-cyan-300 text-md md:text-xl">{`{/*-*/}`}</span>{" "}
        <span className="hover:text-cyan-300 ease-in-out duration-700 ">
          SAVVY{" "}
        </span>
        <span className="hover:text-cyan-300 ease-in-out duration-700 ">
          DESARROLLO{" "}
        </span>
        <span className="hover:text-cyan-300 ease-in-out duration-700 ">
          WEB{" "}
        </span>
      </Link>
      <div
        className="md:invisible hover:cursor-pointer"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        {showMenu ? <SlArrowUp /> : <SlOptions />}
      </div>
      <div
        className={`${
          showMenu ? "top-20 h-[100vh] " : "-top-52 h-0 "
        } transition-all  z-10 ease-in-out duration-700 py-10 flex absolute  left-0 flex-col bg-zinc-800 w-full items-center gap-4 font-semibold text-lg  md:static md:py-0 md:flex-row md:top-0 md:justify-end`}
      >
        <NavLink to="/">Resumen</NavLink>
        <NavLink to="/faqs">Faqs</NavLink>
        <NavLink to="/proyectos">proyectos</NavLink>
      </div>
    </section>
  );
};

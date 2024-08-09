import React from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";

import ResponsiveMenu from "./ResponsiveMenu";
import { useToggle } from "@uidotdev/usehooks";

import { MenuList } from "../../constant";

const Navbar = () => {
  const [toggle, handleToggle] = useToggle(false);

  const handleClickMenuItem = (event) => {
    event.preventDefault();
    const target = event.target;
    const id = target.getAttribute("scroll")?.replace("#", "");
    const element = document.getElementById(String(id));
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="sticky top-0 z-[1000] bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex justify-between items-center py-4 md: pt-4"
        >
          <div className="text-2xl flex items-center font-bold">
            <span className="text-primary">New</span>
            <span className="text-secondary">Farm</span>
            <div className="w-8 h-8 ml-2">
              <img src="./images/icon_logo.png" />
            </div>
          </div>

          <div className="hidden md:block">
            <ul
              className="flex items-center gap-6 text-gray-500"
              onClick={(event) => {
                handleClickMenuItem(event);
              }}
            >
              {MenuList.map((item, index) => (
                <li key={index}>
                  <a
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                    href={item.link}
                    scroll={item.scroll}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden">
            {!toggle ? (
              <MdMenu
                className="text-4xl hover:cursor-pointer"
                onClick={() => handleToggle(true)}
              />
            ) : (
              <MdClose
                className="text-4xl hover:cursor-pointer"
                onClick={() => handleToggle(false)}
              />
            )}
          </div>
        </motion.div>
      </nav>

      <ResponsiveMenu visible={toggle} />
    </>
  );
};

export default Navbar;

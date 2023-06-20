import Signature from "@/container/common/Signature";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [bgColor, setBgColor] = useState("bg-black");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100; // Adjust the threshold as needed

      if (scrollPosition > threshold) {
        setBgColor("bg-black bg-opacity-50");
      } else {
        setBgColor("bg-black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`left-0 right-0 top-0 fixed  z-50 ${bgColor} min-h-4 shadow transition-colors duration-300 py-2`}
    >
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Signature />
        <ul className="flex items-center justify-center">
          {["About", "Projects", "Experiences"].map((item) => {
            return (
              <li key={item} className="mx-2">
                <a className="text-gray-300 cursor-pointer hover:text-white text-base transition-colors duration-300">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

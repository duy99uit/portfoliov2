import React, { useState } from "react";
const data = [
  { id: 1, name: "Home" },
  { id: 2, name: "About" },
  { id: 3, name: "Exp & Skill" },
  { id: 4, name: "Projects" },
];
const NavBar = (props: any) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <header className=" fixed top-0 left-0 w-full z-10 ">
      <div className="px-4 py-2 mx-auto max-w-screen-xl">
        <div className="flex items-center justify-between space-x-4 lg:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            {/* <span className="w-20 h-10 bg-gray-200 rounded-lg"></span> */}
          </div>

          <nav className="hidden text-sm font-medium space-x-8 md:flex px-4 py-2 rounded-full border-blue-500 border-2 bg-gray-100 overflow-hidden">
            {data.map((item, idx) => {
              return (
                <div
                  onClick={() => {
                    setActiveIndex(idx);
                  }}
                  key={item.id}
                  className={
                    activeIndex === idx
                      ? "text-blue-500 cursor-pointer"
                      : "text-gray-500 cursor-pointer"
                  }
                >
                  {item.name}
                </div>
              );
            })}
          </nav>

          <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
            {/* <a
              className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
              href=""
            >
              Log in
            </a>

            <a
              className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
              href=""
            >
              Sign up
            </a> */}
          </div>

          <div className="lg:hidden">
            <button
              className="p-2 text-gray-600 bg-gray-100 rounded-lg"
              type="button"
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;

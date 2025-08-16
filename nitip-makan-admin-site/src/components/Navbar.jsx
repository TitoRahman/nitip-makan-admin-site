import React, { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  const toggleSidebar = () => {
    document
      .querySelector(".group\\/sidebar")
      ?.classList.toggle("-translate-x-full");
  };

  return (
    <div className="flex flex-wrap -mx-3 mb-0">
      <div className="px-3 mb-6 mx-auto w-11/12 bg-white rounded-xl">
        <div className="flex flex-wrap items-center justify-between grow lg:mb-0 py-5 px-5">
          {/* Left Title */}
          <div className="flex flex-col justify-center mb-4 lg:mb-0">
            <span className="font-semibold text-black text-base sm:text-lg md:text-xl lg:text-[1.35rem] truncate">
              Username
            </span>
            <span className="pt-1 text-black text-sm sm:text-base md:text-[0.95rem] truncate">
              See all your notifications
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex flex-wrap items-center lg:shrink-0 lg:flex-nowrap gap-2 sm:gap-4">
            {/* Search */}
            <div className="relative flex items-center w-full sm:w-auto">
              <span className="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="block w-full sm:w-64 md:w-72 lg:w-80 py-2 sm:py-3 pl-10 pr-10 text-base sm:text-sm md:text-base border border-stone-200 rounded-2xl placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
                type="text"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-0 mr-3 top-1/2 -translate-y-1/2 hover:text-primary text-muted"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Menu Toggle */}
            <div className="relative lg:hidden flex items-center ml-auto sm:ml-2">
              <button
                onClick={toggleSidebar}
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-stone-500 border border-stone-200 rounded-2xl hover:text-primary focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            {/* Icons */}
            {["gear", "bell", "user"].map((icon, i) => (
              <div key={i} className="relative flex items-center">
                <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-stone-500 border border-stone-200 rounded-2xl hover:text-primary focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            ))}

            {/* Notification Count */}
            <div className="relative flex items-center">
              <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-2xl hover:bg-primary-dark focus:outline-none">
                <span className="text-sm sm:text-base md:text-lg font-semibold">6</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

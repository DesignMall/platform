import React, { useState, useRef } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import what from "../assets/what.png";
import why from "../assets/why.png";
import who from "../assets/who.png";
import { useNavigate } from "react-router-dom";

interface HeadingRefs {
  [key: string]: HTMLDivElement | null;
}

export default function DmInfo() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const headingsRef = useRef<HeadingRefs>({
    "What is Design Mall?": null,
    Mission: null,
    "Services We Offer:": null,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const sanitizedSearchTerm = searchTerm.toLowerCase().trim();
    for (const [heading, ref] of Object.entries(headingsRef.current)) {
      if (heading.toLowerCase().includes(sanitizedSearchTerm) && ref) {
        (ref as HTMLDivElement).scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
  };

  return (
    <>
      <div className=" flex flex-col gap-10">
        <Header />
        <div className=" flex justify-center">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="What do you want to know..?"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
          </div>
        </div>
        <div className=" flex flex-col gap-6 p-14">
          <motion.div
            initial={{ translateX: -100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className=" flex flex-col gap-6" ref={(el) => (headingsRef.current["What is Design Mall?"] = el)}>
              <h1 className=" font-extrabold text-xl text-green-500">What is Design Mall?</h1>
              <p>Design Mall is an online-driven solution to manufacture, engineer, and create products from scratch using a 3D Canvas Display, allowing user to transform any idea into a real tangible item.</p>
              <hr />
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: -100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className=" flex flex-col gap-6" ref={(el) => (headingsRef.current["Mission"] = el)}>
              <h1 className=" font-extrabold text-xl text-green-500">Mission?</h1>
              <div className=" flex justify-between">
                <motion.div
                  initial={{ translateX: -100, opacity: 1, rotate: -400 }}
                  animate={{ translateX: 0, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <img src={what} className=" w-96 h-80 hover:scale-125 duration-300"></img>
                </motion.div>
                <motion.div
                  initial={{ translateX: -100, opacity: 1, rotate: -400 }}
                  animate={{ translateX: 0, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <img src={who} className=" w-96 h-80 hover:scale-125 duration-300"></img>
                </motion.div>
                <motion.div
                  initial={{ translateX: -100, opacity: 1, rotate: -400 }}
                  animate={{ translateX: 0, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <img src={why} className=" w-96 h-80 hover:scale-125 duration-300"></img>
                </motion.div>
              </div>
              <hr />
            </div>
          </motion.div>
          <motion.div
            initial={{ translateY: -100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className=" w-full" ref={(el) => (headingsRef.current["Services We Offer:"] = el)}>
              <h1 className=" font-extrabold text-xl text-green-500">Services We Offer:</h1>
              <div className=" flex justify-center">
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                  <li className="flex items-center gap-4 hover:underline hover:cursor-pointer" onClick={() => navigate("/clothing")}>
                    <svg
                      className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <b className=" text-red-500">Online</b> Manufacturing of Clothes
                  </li>
                  <li className="flex items-center gap-4 hover:underline hover:cursor-pointer" onClick={() => navigate("/projects")}>
                    <svg
                      className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <b className=" text-red-500">Online</b> Creation of Websites
                  </li>
                  <li className="flex items-center gap-4 hover:underline hover:cursor-pointer" onClick={() => navigate("/carpentry")}>
                    <svg
                      className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <b className=" text-red-500">Online</b> Carpentry
                  </li>
                  <li className="flex items-center gap-4 hover:underline hover:cursor-pointer" onClick={() => navigate("/sport")}>
                    <svg
                      className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <b className=" text-red-500">Online</b> Sport Kit Manipulation: design your sport kit online
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

"use client";
import { React, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const [showdropdown, setShowdropdown] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-900  text-white flex justify-between h-30 items-center md:h-16 px-4  flex-col md:flex-row ">
      <div>
        <Link
          href={"/"}
          className="logo font-bold gap-2 text-lg px-4 flex justify-center items-center"
        >
          <span>
            {" "}
            <img width={44} src="/tea.gif" alt="" />
          </span>
          <span className="text-3xl md:text-base my-3 md:my-0">GetMeaChai</span>
        </Link>
      </div>

      <div className="relative flex flex-col md:block gap-4 ">
        {session && (
          <>
            <button
              onBlur={() => {
                setTimeout(() => {
                  setShowdropdown(false);
                }, 300);
              }}
              onClick={() => setShowdropdown(!showdropdown)}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="mx-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Welcome {session.user.email}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className={`z-10 ${
                showdropdown ? "" : "hidden"
              }  bg-white divide-y absolute left-[125px] divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    href="dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href={`${session.user.name}`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Your Page
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => {
                      signOut();
                    }}
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}

        {!session && (
          <Link href={"/login"}>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

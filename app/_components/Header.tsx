"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { FaSearch } from "react-icons/fa";
type Props = {};
export default function Header({}: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleSearch = () => {};
  const pathname = usePathname();
  return (
    <>
      <div className="w-full h-16 bg-slate-800 sticky top-0">
        <div className="md:container md:mx-auto px-4 w-full h-full">
          <div className="flex justify-between items-center w-full h-full">
            <GiHamburgerMenu
              size={30}
              onClick={toggleSidebar}
              className="md:hidden w-1/5 text-white"
            />
            <div className="flex justify-between  items-center w-full h-full">
              <div className="flex w-full md:flex-row-reverse md:w-1/2 justify-between items-center">
                <div className="w-3/4 flex items-center">
                  <input
                    type="text"
                    className="bg-white w-full rounded-tl-2xl rounded-bl-2xl text-black px-4 py-2"
                    placeholder="Search"
                  />
                  <div className="bg-zinc-300 p-2 rounded-tr-2xl rounded-br-2xl">
                    <FaSearch
                      onClick={handleSearch}
                      className="text-zinc-900"
                      size={24}
                    />
                  </div>
                </div>
                <Link href="/">
                  <Image src={logo} alt={"BookAtEase"} className="h-10 w-16" />
                </Link>
              </div>

              <ul className="hidden md:flex gap-x-6 text-white">
                <li>
                  <Link href="/calendar">
                    <p>Calendar</p>
                  </Link>
                </li>
                <li>
                  <Link href="/events">
                    <p>Events</p>
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    <p>Sign up</p>
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <p>Sign in</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {sidebarOpen && (
        <aside className="w-1/3 fixed top-0 left-0 max-w-40 h-full flex flex-col p-4  z-10 items-center bg-slate-800">
          <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </aside>
      )}
    </>
  );
}

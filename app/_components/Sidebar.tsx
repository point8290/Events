import Link from "next/link";
import React from "react";
import { FaX } from "react-icons/fa6";

type Props = {
  sidebarOpen: Boolean;
  toggleSidebar: React.MouseEventHandler<SVGElement>;
};

export default function Sidebar({ sidebarOpen, toggleSidebar }: Props) {
  return (
    <>
      <FaX
        size={15}
        className=" self-end items-start text-white h-[10%]"
        onClick={toggleSidebar}
      />
      <ul className="flex flex-col gap-4  h-[80%] my-auto text-white">
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
          <Link href="/Login">
            <p>Sign in</p>
          </Link>
        </li>
      </ul>
    </>
  );
}

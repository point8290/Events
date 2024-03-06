"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

export default function Register({}: Props) {
  const router = useRouter();
  const onSuccessfullRegistration = () => {
    router.replace("/login");
  };
  return (
    <div className="w-96 mx-auto flex justify-center items-center flex-col ">
      <form className="mt-2 w-full ">
        <div className=" py-1 w-full m-1 flex flex-col items-start">
          <label className="py-2 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-2 py-1 rounded border border-slate-900"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="py-1 w-full m-1 flex flex-col items-start">
          <label className="py-2 font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-2 py-1 rounded border border-slate-900"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="p-2 mx-1 my-2 flex justify-between items-center">
          <p className="text-sm">
            Already have an account?
            <Link className="text-blue-700 pl-1 underline" href="/login">
              Sign in
            </Link>
          </p>
        </div>
        <button className="px-4 w-full py-2 font-semibold rounded bg-slate-900 text-white">
          Register
        </button>
      </form>
    </div>
  );
}

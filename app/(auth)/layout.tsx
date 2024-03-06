import Link from "next/link";
import { FaGoogle, FaPhone } from "react-icons/fa6";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="w-96 mx-auto flex justify-center items-center flex-col mt-4 ">
        <h1 className="font-bold text-2xl mt-2"> Get started </h1>
      </div>
      {children}
      <div className="flex w-96 mx-auto justify-center flex-col items-center">
        <h1 className="font-bold my-4 text-xl text-gray-400"> OR </h1>

        <Link
          className="my-2 w-full px-4 py-2 flex items-center rounded border border-black hover:border-white hover:bg-slate-200 transition duration-0 hover:duration-300 "
          href="/google-auth"
        >
          <FaGoogle className="inline float-start w-1/3" />
          <span className=""> Login with Google</span>
        </Link>
        <Link
          className="my-2 w-full px-4 py-2 flex items-center rounded border  border-black hover:border-white hover:bg-slate-200 transition duration-0 hover:duration-300 "
          href="/phone-auth"
        >
          <FaPhone className="inline float-start w-1/3" />
          <span>Login with Phone</span>
        </Link>

        <p className="text-sm py-1">
          I agree to{" "}
          <Link className="text-blue-700 underline" href="/terms">
            Terms and Condition
          </Link>{" "}
          &{" "}
          <Link className="text-blue-700 underline" href="/terms">
            Privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

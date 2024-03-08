import Image from "next/image";
import React from "react";
const SearchEvents = React.lazy(() => import("./_components/SearchEvents"));
export default function Home() {
  return (
    <div className="">
      <SearchEvents />
    </div>
  );
}

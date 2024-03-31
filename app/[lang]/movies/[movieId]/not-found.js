"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  return (
    <div className="flex justify-center items-center">
      <div>
        <h2>
          Not Found <br />
          This movie with
          <span className="text-blue-400"> {pathName.slice(10)} </span>
          id was not found!
        </h2>

        <Link className="text-blue-700 font-bold" href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}

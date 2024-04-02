"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
// import { useState } from "react";

export default function Header() {
  const router = useRouter();

  const pathName = usePathname();
//   const Lang = pathName.slice(1, 3);
	const [Lang,setLang] = useState(pathName.slice(1, 3))
  const getOpositLanguage = (lan) => {
    if (Lang == "en") {
      return "/bn/";
    } else {
      return "/en/";
    }
  };

  const changeLanguage = (e) => {
    // console.log(Lang.length, pathName.length);
    if (pathName.length > 3) {
      // detail page
      const newPathname = pathName.replace(/^\/[a-z]{2}\//, getOpositLanguage(Lang));
	  console.log(newPathname);
      router.push(newPathname);
		e.preventDefault()
	//   window.location.reload();
    } else {
      // home page
      router.push(getOpositLanguage(Lang));
    }

  };
  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Link href="/">
          <Image src="/assets/logo.svg" width={139} height={26} alt="logo" />
        </Link>

        <ul className="flex items-center space-x-5">
          <li
            className="bg-indigo-400 rounded-md py-2 px-3 cursor-pointer"
            onClick={changeLanguage}
          >
            Switch Language to
            <span className="text-green-300 text-xl">
              ({getOpositLanguage(Lang)})
            </span>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/assets/ring.svg" width={24} height={24} alt="" />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image
                src="/assets/icons/sun.svg"
                width={24}
                height={24}
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image
                src="/assets/shopping-cart.svg"
                width={24}
                height={24}
                alt=""
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

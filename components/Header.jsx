"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { useState } from "react";

export default function Header() {
	const router = useRouter();

	const pathName = usePathname();
	const Lang = pathName.slice(1,3)
	const changeLanguage = () => {
		// const { pathname, query } = router;
		let newPathname;
		if(Lang =='en'){
			newPathname = pathName.replace(/^\/[a-z]{2}\//, '/bn/');
		}
		else{
			newPathname = pathName.replace(/^\/[a-z]{2}\//, '/en/');

		}
		// console.log(Lang,"next ",pathName);
		console.log(Lang,newPathname);
		router.push( newPathname );
		// router.push({ pathname: newPathname });
	  };
	// const [isEnglish, setIsEnglish] = useState(true)
  return (
    <header>
		<nav className="container flex items-center justify-between space-x-10 py-6">
			<Link href="/">
				<Image src="/assets/logo.svg" width={139} height={26} alt="logo"/>
			</Link>

			<ul className="flex items-center space-x-5">
				<li onClick={changeLanguage}>Click me</li>
				<li>
					<Link className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                    <Image src="/assets/ring.svg" width={24} height={24} alt=""/>
					</Link>
				</li>
				<li>
					<Link className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                    <Image src="/assets/icons/sun.svg" width={24} height={24} alt=""/>
					</Link>
				</li>
				<li>
					<Link className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                    <Image src="/assets/shopping-cart.svg" width={24} height={24} alt=""/>
					</Link>
				</li>
			</ul>
		</nav>
	</header>
  )
}

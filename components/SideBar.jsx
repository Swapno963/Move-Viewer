import Link from "next/link";

export default function SideBar() {
  return (
    <aside>
    <ul className="space-y-2">
        <li>
            <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
                <img src="/assets/icons/trending.svg" width="24" height="24" alt=""/>
                <span>Trending</span>
            </Link>
        </li>
        <li>
            <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                <img src="/assets/icons/newRelease.svg" width="24" height="24" alt=""/>
                <span>New Releases</span>
            </Link>
        </li>
        <li>
            <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                <img src="/assets/icons/commingSoon.svg" width="24" height="24" alt=""/>
                <span>Coming Soon</span>
            </Link>
        </li>
        <li>
            <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                <img src="/assets/icons/favourite.svg" width="24" height="24" alt=""/>
                <span>Favourites</span>
            </Link>
        </li>
        <li>
            <Link className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                <img src="/assets/icons/watchLater.svg" width="24" height="24" alt=""/>
                <span>Watch Later</span>
            </Link>
        </li>
    </ul>
</aside>
  )
}

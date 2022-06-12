import { Link } from "@remix-run/react";
import { VFC } from "react";

interface NavbarProps {}

const Navbar: VFC<NavbarProps> = () => {
  return (
    <nav className="sticky top-0 py-4 dark:bg-black bg-slate-100 z-10">
      <ul className="flex mt-4 justify-evenly">
        <li className="flex-shrink-0 min-w-[100px] text-center">
        <Link to="/" className="underline-offset-8 hover:underline">Home</Link>
        </li>
        <li className="flex-shrink-0 min-w-[100px] text-center">
        <Link to="/" className="underline-offset-8 hover:underline">About</Link>
        </li>
        <li className="flex-shrink-0 min-w-[100px] text-center">
          <Link to="/" className="underline-offset-8 hover:underline">
            <div className="w-[100px] h-[30px]"></div>
          </Link>
        </li>
        <li className="flex-shrink-0 min-w-[100px] text-center">
        <Link to="/" className="underline-offset-8 hover:underline">Services</Link>
        </li>
        <li className="flex-shrink-0 min-w-[100px] text-center">
        <Link to="/" className="underline-offset-8 hover:underline">Get in touch</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
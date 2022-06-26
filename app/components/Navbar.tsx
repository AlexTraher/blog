import { Link, useLocation } from "@remix-run/react";
import { VFC } from "react";

interface NavbarProps {}

const isHome = (pathname: string) => pathname === '/';

const Navbar: VFC<NavbarProps> = () => {
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 py-4 dark:bg-black bg-slate-100 z-10">
      <ul className="flex mt-4 justify-evenly">
        <li className="flex-shrink-0 min-w-[100px] text-center">
        <Link to="/" className="underline-offset-8 hover:underline">Home</Link>
        </li>
        <li className="flex-shrink-0 min-w-[100px] text-center">
        <Link to="/about" className="underline-offset-8 hover:underline">About</Link>
        </li>
        <li className="flex-shrink-0 min-w-[100px] text-center">
          <Link to="/" className="underline-offset-8 hover:underline">
            <div className={`
              w-[151px]
              h-[45px]
              mt-[-1rem]
              bg-contain
              bg-no-repeat
              bg-center
              ${isHome(pathname) ? 
                `motion-reduce:bg-gait-software-light
                motion-reduce:dark:bg-gait-software-dark
                md:bg-none
                bg-gait-i-light dark:bg-gait-i-dark
                `
                :
                `md:bg-gait-software-light md:dark:bg-gait-software-dark
                bg-gait-i-light dark:bg-gait-i-dark`
              }
            `}></div>
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
import { Link, useLocation } from "@remix-run/react";
import { VFC } from "react";

interface NavbarProps {}

const isHome = (pathname: string) => pathname === '/';

const Navbar: VFC<NavbarProps> = () => {
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 py-4 dark:bg-black bg-slate-100 z-10 flex flex-wrap">
      <div className="bg-gait-i-light dark:bg-gait-i-dark h-[45px] w-[45px] bg-contain bg-no-repeat [background-position:20px] flex-1 sm:hidden"></div>
      <input id="menuToggle" type="checkbox" className="block opacity-0 sm:hidden" />
      <label htmlFor="menuToggle" className="block cursor-pointer self-center sm:hidden"></label>
      <ul className="mt-4 justify-evenly collapsible-menu flex-col sm:flex-row sm:flex flex-shrink-0 flex-grow-0 flex-[100%]">
        <li className="flex-shrink-0 min-w-[100px] text-center">
        <Link to="/" className="sm:underline-offset-8 hover:underline">Home</Link>
        </li>
        <li className="flex-shrink-0 min-w-[100px] text-center">
        <Link to="/about" className="sm:underline-offset-8 sm:hover:underline">About</Link>
        </li>
        <li className="flex-shrink-0 min-w-[100px] text-center hidden sm:block">
          <Link to="/" className="sm:underline-offset-8 sm:hover:underline">
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
        <Link to="/" className="sm:underline-offset-8 sm:hover:underline">Services</Link>
        </li>
        <li className="flex-shrink-0 min-w-[100px] text-center">
        <Link to="/" className="sm:underline-offset-8 sm:hover:underline">Get in touch</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
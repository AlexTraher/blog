import { NavLink, useLocation } from "@remix-run/react";
import { VFC } from "react";

interface NavbarProps {}

const isHome = (pathname: string) => pathname === '/';

const activeUnderline = (classNames: string) => ({ isActive }: { isActive: boolean }) => `${classNames} ${isActive ? 'sm:underline ' : ''}`;

const Navbar: VFC<NavbarProps> = () => {
  const { pathname } = useLocation();

  return (
    <nav className="
      sticky top-0 py-2 sm:py-4 dark:bg-gait-blue-dark bg-gait-green-light z-10 flex flex-wrap 
      after:content-[''] after:w-[80%] after:mx-4 after:border-b-2 after:border-black after:dark:border-gait-green-dark after:p-b-2 after:sm:border-0
    ">
      <div className="bg-gait-light dark:bg-gait-dark bg-contain bg-no-repeat [background-position:20px] flex-1 sm:hidden h-[60px]"></div>
      <input id="menuToggle" type="checkbox" className="block opacity-0 sm:hidden" />
      <label htmlFor="menuToggle" className="block cursor-pointer self-center sm:hidden"></label>
      <ul className="mt-4 justify-evenly collapsible-menu flex-col sm:flex-row sm:flex flex-shrink-0 flex-grow-0 flex-[100%]">
        <li className="flex-shrink-0 min-w-[100px] text-center">
        <NavLink to="/" className={activeUnderline("sm:underline-offset-8 hover:underline uppercase")}>Home</NavLink>
        </li>
        <li className="flex-shrink-0 min-w-[100px] text-center">
        <NavLink to="/about" className={activeUnderline("sm:underline-offset-8 sm:hover:underline uppercase")}>About</NavLink>
        </li>
        <li className="flex-shrink-0 min-w-[100px] text-center hidden sm:block">
          <NavLink to="/" className="sm:underline-offset-8 sm:hover:underline">
            <div className={`
              w-[151px]
              h-[45px]
              mt-[-1rem]
              md:ml-[-2px]
              bg-contain
              bg-no-repeat
              bg-center
              ${isHome(pathname) ? 
                `motion-safe:md:bg-none
                motion-reduce:md:bg-gait-software-light
                motion-reduce:md:dark:bg-gait-software-dark
                bg-gait-i-light dark:bg-gait-i-dark
                `
                :
                `md:bg-gait-software-light md:dark:bg-gait-software-dark
                bg-gait-i-light dark:bg-gait-i-dark`
              }
            `}></div>
          </NavLink>
        </li>
        <li className="flex-shrink-0 min-w-[100px] text-center">
        <NavLink to="/services" className={activeUnderline("sm:underline-offset-8 sm:hover:underline uppercase")}>Services</NavLink>
        </li>
        <li className="flex-shrink-0 min-w-[100px] text-center">
        <NavLink to="/get-in-touch" className={activeUnderline("sm:underline-offset-8 sm:hover:underline uppercase")}>Get in touch</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
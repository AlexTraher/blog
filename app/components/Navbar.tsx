import { NavLink, useLocation } from "@remix-run/react";
import { FC, useState } from "react";

interface NavbarProps {}

const isHome = (pathname: string) => pathname === '/';

const activeUnderline = (classNames: string) => ({ isActive }: { isActive: boolean }) => `${classNames} ${isActive ? 'md:underline font-semibold' : ''}`;

const Navbar: FC<NavbarProps> = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="
      sticky top-0 py-4 dark:bg-gait-blue-dark bg-gait-paper z-10 flex px-6 flex-col md:flex-row min-h-[80px]
    ">
      <div className="self-center flex justify-between md:justify-start w-[100%]">
        <NavLink to="/" className="md:underline-offset-8 md:hover:underline">
          <div className={`
            w-[151px]
            h-[45px]
            md:ml-[-2px]
            bg-contain
            bg-no-repeat
            md:bg-center
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
        <input id="menuToggle" type="checkbox" className="block opacity-0 md:hidden" onChange={({ target }) => setMenuOpen(target.checked)}/>
        <label htmlFor="menuToggle" className="block cursor-pointer self-center md:hidden justify-self-end"></label>
      </div>
      <ul className={`md:mt-4 collapsible-menu flex-col md:flex-row md:flex flex-shrink-1 flex-grow-1 flex-[100%] justify-end ${menuOpen && 'collapsible-menu-open'}`}>
        <li className="flex-shrink-0 flex-grow-0 min-w-[120px] text-center text-sm">
        <NavLink to="/" className={activeUnderline("md:underline-offset-8 md:hover:underline uppercase block w-[100%]")}>Home</NavLink>
        </li>
        <li className="flex-shrink-0 flex-grow-0 min-w-[120px] text-center text-sm">
        <NavLink to="/services" className={activeUnderline("md:underline-offset-8 md:hover:underline uppercase block w-[100%]")}>Services</NavLink>
        </li>
        <li className="flex-shrink-0 flex-grow-0 min-w-[120px] text-center text-sm">
          <NavLink to="/expertise" className={activeUnderline("md:underline-offset-8 md:hover:underline uppercase block w-[100%]")}>Expertise</NavLink>
        </li>
        <li className="flex-shrink-0 flex-grow-0 min-w-[120px] text-center text-sm">
          <a href="https://blog.gait.dev" className={"md:underline-offset-8 md:hover:underline uppercase block w-[100%]"}>
            Blog
            <span className="ml-2 bg-icons8-external-link dark:bg-icons8-external-link-dark w-[15px] h-[22px] inline-block bg-contain bg-no-repeat bg-[center_top_8px] content-['']"></span></a>
        </li>
        <li className="flex-shrink-0 flex-grow-0 min-w-[120px] text-center text-sm">
         <a href="mailto:hello@gait.dev" className="md:underline-offset-8 md:hover:underline block w-[100%] text-[15px]">hello@gait.dev</a>
        </li>
      </ul>
      
    </nav>
  )
}

export default Navbar;
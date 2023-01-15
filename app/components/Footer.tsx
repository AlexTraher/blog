import { FC } from "react";

const Footer: FC = () => (
  <footer className="flex flex-col w-[100%] py-2 bg-gait-green-light dark:bg-gait-blue-mid items-center">
    <div className="my-2 w-[100px] h-[30px] bg-no-repeat bg-center bg-contain bg-gait-software-light dark:bg-gait-software-dark"></div>
    <p className="my-2">© GAIT Software - Site by created by us</p>
  </footer>
)

export default Footer;
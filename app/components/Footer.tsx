import { FC } from "react";
import Paragraph from "./Paragraph";

const Footer: FC = () => (
  <footer className="flex flex-col w-[100%] py-2 bg-gait-green-shallow dark:bg-gait-blue-shallow items-center">
    <div className="my-2 w-[100px] h-[30px] bg-no-repeat bg-center bg-contain bg-gait-software-light dark:bg-gait-software-dark"></div>
    <Paragraph padding="sm">© GAIT Software - Site created by us</Paragraph>
  </footer>
)

export default Footer;
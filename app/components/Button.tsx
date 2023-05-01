import { FC, PropsWithChildren, ReactElement } from "react";


interface ButtonProps {
  className?: string
  onClick: () => void
  icon?: () => ReactElement
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, onClick, icon, className = '' }) => {

  return (
    <button className={`
      bg-gait-off-white dark:bg-gait-off-black 
      shadow-md shadow-gait-green-shallow dark:shadow-gait-blue-shallow
      hover:bg-white dark:hover:bg-black
      rounded
      px-8
      ${className}`}
      onClick={onClick}
      >
      {icon ? (
        <span className="float-left my-[-25px] ml-[-45px]">
          {icon()}
        </span> 
      ): null}
      <span className="leading-none my-4">{children}</span>
    </button>
  )
}

export default Button;

/* Tech Expertise button */

// position: absolute;
// width: 340px;
// height: 120px;
// left: 320px;
// top: 493px;

// filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));


// /* Button */

// position: absolute;
// width: 340px;
// height: 120px;
// left: 320px;
// top: 493px;

// background: #FEFCF6;
// box-shadow: 3px 3px 15px 2px rgba(52, 78, 50, 0.75);
// border-radius: 7px;


// /* Technical Expertise */

// position: absolute;
// width: 157px;
// height: 70px;
// left: calc(50% - 157px/2 - 229.5px);
// top: calc(50% - 70px/2 - 523.5px);

// font-family: 'Barlow';
// font-style: normal;
// font-weight: 400;
// font-size: 30px;
// line-height: 30px;
// /* or 100% */
// display: flex;
// align-items: center;
// text-align: center;
// letter-spacing: 0.03em;

// color: #000000;


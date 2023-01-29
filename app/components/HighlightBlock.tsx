import { FC, PropsWithChildren } from "react";

interface Props {
 header?: string
 className?: string
 align?: "left" | "center" | "right"
}

const ALIGN_TO_CLASSNAME = {
  "left": "sm:text-left",
  "center": "sm:text-center",
  "right": "sm:text-right",
}

const HighlightBlock: FC<PropsWithChildren<Props>> = ({ header, children, className = "", align = "left" }) => {
  return (
    // TODO dark theme
    <section className={`bg-gait-off-white dark:bg-gait-off-black dark:text-gait-blue rounded p-4 lg:px-16 ${className}`}>
      {header ? <h3 className={`
        text-center text-lg lg:text-xl
        font-header font-light 
        py-4 md:mx-[-20px]
        ${ALIGN_TO_CLASSNAME[align]}
        underline-offset-8 underline decoration-gait-paper`}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{header}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h3> : null}
      {children}
    </section>
  )
}

export default HighlightBlock;
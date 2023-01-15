import { FC, PropsWithChildren } from "react";

interface Props {
 header?: string
 className?: string
}

const HighlightBlock: FC<PropsWithChildren<Props>> = ({ header, children, className = "" }) => {
  return (
    // TODO dark theme
    <section className={`bg-white dark:bg-gait-blue-mid rounded ${className} p-4`}>
      {header ? <h3 className="
        text-center text-xl
        font-header font-light 
        py-4 px-8 mx-[-20px]
        underline-offset-8 underline decoration-gait-paper">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{header}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h3> : null}
      {children}
    </section>
  )
}

export default HighlightBlock;
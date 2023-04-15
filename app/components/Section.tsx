import { FC, PropsWithChildren } from "react";

interface Props {
  header?: string
  headerPosition?: 'left' | 'right',
  columns?: number
  headerId?: string
  className?: string
}

type TSection = FC<PropsWithChildren<Props>> & {
  Column: typeof SectionColumn;
}

const Section: TSection = ({ header, children, headerId, headerPosition = 'left', className = '' }) => {
  return (
    <section className="flex flex-col w-[100%]">
      {header ? <h2 
        id={headerId}
        className={`
          bg-gait-green-shallow dark:bg-gait-blue-shallow 
          text-center text-lg sm:text-2xl ${headerPosition === 'left' ? 'md:text-left' : 'md:text-right'}
          font-header font-light 
          py-4 px-8 mx-[-1rem] md:mx-[-2rem] md:px-16
          sticky top-[80px]
          underline-offset-8 underline decoration-white decoration-2
          z-10
          ${className}`
      }>
        &nbsp;&nbsp;&nbsp;{header}&nbsp;&nbsp;&nbsp;
      </h2> : null}
      <div className="flex justify-between flex-wrap">
        {children}
      </div>
    </section>
  )
}

interface SectionColumnProps {
  className?: string;
  border?: boolean
}

const SectionColumn: FC<PropsWithChildren<SectionColumnProps>> = ({ children, className = "", border = true }) => {
  return (
    <div 
      className={`
       ${border ? "first:border-b-white first:border-b-2 border-b-0 md:first:border-b-0 md:first:border-r-white md:first:border-r-2" : ""}
        px-2 sm:px-8 py-2 my-2
        flex
        flex-col
        justify-center
        ${className}`
      }>
      {children}
    </div>
  )
}

Section.Column = SectionColumn;


export default Section;

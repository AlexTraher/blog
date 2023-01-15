import { FC, PropsWithChildren } from "react";



interface Props {
  header?: string
  headerPosition?: 'left' | 'right',
  columns?: number
}

type TSection = FC<PropsWithChildren<Props>> & {
  Column: typeof SectionColumn;
}



const Section: TSection = ({ header, children, headerPosition = 'left' }) => {
  return (
    <section className="flex flex-col w-[100%]">
      {header ? <h2 className={`
        bg-gait-green-light dark:bg-gait-blue 
        text-center text-2xl ${headerPosition === 'left' ? 'md:text-left' : 'md:text-right'}
        font-header font-light 
        py-4 px-8 mx-[-20px]
        sticky top-[80px]
        underline-offset-8 underline decoration-white decoration-2
        z-10`
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
}

const SectionColumn: FC<PropsWithChildren<SectionColumnProps>> = ({ children, className = "" }) => {
  return (
    <div 
      className={`
        first:border-b-white first:border-b-2 border-b-0 md:first:border-b-0 md:first:border-r-white md:first:border-r-2
        px-4 py-2 my-2
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

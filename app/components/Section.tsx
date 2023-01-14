import { FC, PropsWithChildren } from "react";



interface Props {
  header: string
  columns?: number
}

type TSection = FC<PropsWithChildren<Props>> & {
  Column: typeof SectionColumn;
}



const Section: TSection = ({ header, children }) => {
  return (
    <section className="flex flex-col w-[100%]">
      <h2 className="bg-gait-green-light text-center md:text-left text-2xl font-header font-light py-4 px-4 mx-[-20px]">
        <span className="md:ml-[20vw]">{header}</span>
      </h2>
      <div className="flex justify-between">
        {children}
      </div>
    </section>
  )
}

type SupportedCols = 1|2|3|4|5|6|7|8|9|10|11|12;
interface SectionColumnProps {
  col: SupportedCols,
  smCol?: SupportedCols
  mdCol?: SupportedCols
}

const SectionColumn: FC<PropsWithChildren<SectionColumnProps>> = ({ children }) => {
  return (
    <div 
      className="border-r-white border-r-2 last:border-r-0 px-2 py-2 my-2 flex-[100%]">
      {children}
    </div>
  )
}

Section.Column = SectionColumn;


export default Section;

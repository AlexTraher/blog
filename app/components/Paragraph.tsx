import { FC, PropsWithChildren } from "react";

interface ParagraphProps {
  padding?: "sm" | "md" | "lg"
  textSize?: "sm" | "md" | "lg" | "xl",
  align?: "left" | "center" | "right"
  color?: "default" | "highlight"
}

const PADDING_TO_CLASSNAME = {
  sm: "my-2",
  md: "my-4",
  lg: "my-8"
} as const;

const TEXT_SIZE_TO_CLASSNAME = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl"
} as const;

const TEXT_COLOR_TO_CLASSNAME = {
  default: "",
  highlight: "text-gait-green-dark dark:text-gait-blue",
} as const;



const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({ children, padding = "md", textSize = "md", align = "left", color = "default" }) => {
  return (
    <p className={`
      ${PADDING_TO_CLASSNAME[padding]}
      ${TEXT_SIZE_TO_CLASSNAME[textSize]}
      text-${align}
      ${TEXT_COLOR_TO_CLASSNAME[color]}`}>
      {children}
    </p>
  )
}

export default Paragraph;
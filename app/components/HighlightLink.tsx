import { FC, PropsWithChildren } from "react"


interface HighlightLinkProps {
  href: string
}

const HightlightLink: FC<PropsWithChildren<HighlightLinkProps>> = ({ children, href }) => {
  return (
    <a href={href} className="underline underline-offset-2">{children}</a>
  )
}

export default HightlightLink
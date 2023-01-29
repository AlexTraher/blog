import { FC, PropsWithChildren } from "react"


const Border: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="p-2 rounded border-2 border-gait-green dark:border-gait-blue">{children}</div>
  )
}

export default Border
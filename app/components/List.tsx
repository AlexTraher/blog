import { FC, PropsWithChildren } from  "react";

interface ListProps {
  tabDepth?: number
}

const MARGIN_FOR_TAB_DEPTH = [
  'ml-0',
  'ml-8'
] as const

const ListItem: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <li>{children}</li>
  )
}

type ListComp = FC<PropsWithChildren<ListProps>> & {
  Item: typeof ListItem
}

const List: ListComp = ({ children, tabDepth = 0 }) => {
  return (
    <ul className={`list-disc list-inside ${MARGIN_FOR_TAB_DEPTH[tabDepth]}`}>
      {children}
    </ul>
  )
}

List.Item = ListItem

export default List



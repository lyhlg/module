import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const ButtonStack = ({ children }: Props) => {
  return (
    <div>
      <h1>ButtonStack Component</h1>
      {children}
    </div>
  )
}

export default ButtonStack

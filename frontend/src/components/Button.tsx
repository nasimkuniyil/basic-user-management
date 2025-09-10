import React from "react"
import type { IButton } from "../interfaces/interfaces"

const Button: React.FC<React.PropsWithChildren<IButton>> = ({children, onClick, className}) => {
  return (
    <button onClick={onClick} className={`bg-blue-400 text-white py-2 px-4 text-sm rounded-lg cursor-pointer hover:scale-95 hover:drop-shadow-md hover:bg-blue-500 duration-300 ${className}`}>
        {children}
    </button>
  )
}

export default Button
"use client"
import React, { FC, MouseEventHandler, ReactNode } from "react"

export interface ButtonProps {
  children: ReactNode
  onClick: MouseEventHandler
}

const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button onClick={onClick} className="rounded bg-blue-500 px-4 py-2 font-bold text-sky-300 hover:bg-blue-700">
    {children}
  </button>
)

export default Button

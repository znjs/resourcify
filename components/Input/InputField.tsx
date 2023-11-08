"use client"
import React, { ChangeEvent, FC } from "react"

interface InputFieldProps {
  label: string
  type: "email" | "password"
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputField: FC<InputFieldProps> = ({ label, type, value, onChange }) => {
  const validate = (value: string) => {
    if (type === "email") {
      const re = /\S+@\S+\.\S+/
      return re.test(value)
    } else if (type === "password") {
      return value.length >= 8
    }
    return false
  }

  const isValid = validate(value)
  const inputClass = `w-full p-2 border ${isValid ? "border-green-500" : "border-red-500"}`

  return (
    <div className="mb-4 flex flex-col">
      <label className="mb-2 font-bold text-rose-500">{label}</label>
      <input type={type} value={value} onChange={onChange} className={inputClass} />
      {!isValid && (
        <small className="text-red-500">
          {type === "email" ? "Please enter a valid email." : "Password must be at least 8 characters."}
        </small>
      )}
    </div>
  )
}

export default InputField
export type { InputFieldProps }

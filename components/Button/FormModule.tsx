// FormInputModule.tsx
"use client"
import React, { useState } from "react"

interface FormInputProps {
  label: string
  type: string
  name?: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  error?: boolean
}

export const FormModule: React.FC<FormInputProps> = ({
  label,
  type,
  placeholder,
  value,
  name,
  onChange,
  className = "",
  error = false,
}) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={` ${className}`}>
      <label className="mb-1 block text-sm text-[#6C7278]">{label}</label>
      <div
        className={`
        flex h-[46px] items-center rounded-lg border px-4
        py-2 ${error ? "border-[#D14343]" : "border-[#00000033]"}
        ${isFocused ? " ring-2 ring-[#47CD63]" : ""}
        transition-all duration-200
      `}
      >
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent text-base outline-none"
          value={value}
          name={name}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  )
}

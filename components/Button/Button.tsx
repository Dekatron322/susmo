"use client"

import React, { useState } from "react"

type ButtonVariant =
  | "primary"
  | "black"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "outlineTwo"
  | "primaryOutline"
  | "ghost2"
type ButtonSize = "sm" | "md" | "lg"

interface ButtonProps {
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  disabled?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
  /** Optional icon element to render */
  icon?: React.ReactNode | ((isHovered: boolean) => React.ReactNode)
  /** Position of the icon relative to the button text */
  iconPosition?: "start" | "end"
}

export const ButtonModule: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  disabled = false,
  variant = "primary",
  size = "md",
  className = "",
  children,
  icon,
  iconPosition = "start",
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const baseClasses =
    "flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variantClasses = {
    primary: "bg-[#47CD63] text-white hover:bg-[#3BB955] focus:ring-[#47CD63]",
    primaryOutline:
      "border border-[#47CD63] text-[#47CD63] hover:bg-[#E8F8EB] hover:text-[#47CD63] focus:ring-[#47CD63]",
    black: "bg-[#131319] text-white hover:bg-[#000000] focus:ring-[#131319]",
    secondary: "bg-[#E8F8EB] text-[#47CD63] hover:bg-[#D5F2DB] focus:ring-[#47CD63]",
    outline: "border border-[#ffffff] text-[#ffffff] hover:bg-[#E8F8EB] hover:text-[#47CD63] focus:ring-[#47CD63]",
    outlineTwo:
      "border border-[#0000000] text-[#000000CC] hover:bg-[#E8F8EB] hover:text-[#47CD63] focus:ring-[#47CD63]",
    ghost: "text-[#47CD63] hover:bg-[#E8F8EB] focus:ring-[#47CD63]",
    ghost2: "text-[#000000CC] hover:bg-[#E8F8EB] focus:ring-[#000000CC]",
    danger: "bg-[#e05c2a] text-white hover:bg-[#d95425] focus:ring-[#c44d1f]",
  }

  const sizeClasses = {
    sm: "h-8 px-3 text-sm",
    md: "h-12 px-8 text-base",
    lg: "h-12 px-6 text-lg",
  }

  const renderIcon = () => {
    if (!icon) return null
    if (typeof icon === "function") {
      return icon(isHovered)
    }
    return React.isValidElement(icon) ? React.cloneElement(icon, { isHovered } as Partial<unknown>) : icon
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      } ${className}`}
    >
      {icon && iconPosition === "start" && <span className="mr-1 inline-flex items-center">{renderIcon()}</span>}
      {children}
      {icon && iconPosition === "end" && <span className="ml-1 inline-flex items-center">{renderIcon()}</span>}
    </button>
  )
}

import React from "react"

export interface IconProps {
  className?: string
  isHovered?: boolean
}

const ArrowIcon: React.FC<IconProps> = ({ className = "", isHovered = false }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-200 ${className}`}
      style={{
        transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
        transformOrigin: "center center",
      }}
    >
      <g clipPath="url(#clip0_411_389)">
        <path d="M6.5 18L18.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M8.75 6H18.5V15.75"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_411_389">
          <rect width="24" height="24" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ArrowIcon

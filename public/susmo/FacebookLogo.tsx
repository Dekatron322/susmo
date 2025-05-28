import React, { useState } from "react"

export interface IconProps {
  className?: string
}

const FacebookIcon: React.FC<IconProps> = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <g clip-path="url(#clip0_406_328)">
        <path
          d="M15.4486 26.7703C21.7354 26.7703 26.8318 21.6738 26.8318 15.3871C26.8318 9.10033 21.7354 4.00391 15.4486 4.00391C9.16185 4.00391 4.06543 9.10033 4.06543 15.3871C4.06543 21.6738 9.16185 26.7703 15.4486 26.7703Z"
          stroke={isHovered ? "#47CD63" : "white"}
          stroke-width="1.8972"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20.1916 10.6445H18.2944C17.5397 10.6445 16.8158 10.9444 16.2821 11.478C15.7484 12.0117 15.4486 12.7356 15.4486 13.4903V26.7707"
          stroke={isHovered ? "#47CD63" : "white"}
          stroke-width="1.8972"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.6542 17.2852H19.243"
          stroke={isHovered ? "#47CD63" : "white"}
          stroke-width="1.8972"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_406_328">
          <rect
            width="30.3551"
            height="30.3551"
            fill={isHovered ? "#47CD63" : "white"}
            transform="translate(0.270996 0.210938)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default FacebookIcon

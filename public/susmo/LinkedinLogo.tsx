import React, { useState } from "react"

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  size?: number | string
  defaultColor?: string
  hoverColor?: string
  showHoverEffect?: boolean
}

const LinkedInIcon: React.FC<IconProps> = ({
  className = "",
  size = 31,
  defaultColor = "white",
  hoverColor = "#47CD63",
  showHoverEffect = true,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const currentColor = showHoverEffect && isHovered ? hoverColor : defaultColor
  const strokeWidth = 1.8972

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`linkedin-icon ${className}`}
      onMouseEnter={() => showHoverEffect && setIsHovered(true)}
      onMouseLeave={() => showHoverEffect && setIsHovered(false)}
      {...props}
    >
      <g clipPath="url(#clip0_406_321)">
        <path
          d="M25.9954 4.00391H5.12621C4.60231 4.00391 4.17761 4.42861 4.17761 4.9525V25.8217C4.17761 26.3456 4.60231 26.7703 5.12621 26.7703H25.9954C26.5193 26.7703 26.944 26.3456 26.944 25.8217V4.9525C26.944 4.42861 26.5193 4.00391 25.9954 4.00391Z"
          stroke={currentColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6122 13.4902V21.079"
          stroke={currentColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8177 13.4902V21.079"
          stroke={currentColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6122 16.8103C14.6122 15.9298 14.962 15.0853 15.5846 14.4627C16.2073 13.84 17.0517 13.4902 17.9323 13.4902C18.8128 13.4902 19.6573 13.84 20.2799 14.4627C20.9026 15.0853 21.2524 15.9298 21.2524 16.8103V21.079"
          stroke={currentColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8178 11.5938C11.6036 11.5938 12.2407 10.9568 12.2407 10.1709C12.2407 9.3851 11.6036 8.74805 10.8178 8.74805C10.032 8.74805 9.3949 9.3851 9.3949 10.1709C9.3949 10.9568 10.032 11.5938 10.8178 11.5938Z"
          fill={currentColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_406_321">
          <rect width="30.3551" height="30.3551" fill="white" transform="translate(0.383179 0.210938)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default LinkedInIcon

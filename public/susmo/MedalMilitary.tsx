import React from "react"

export interface IconProps {
  className?: string
  isHovered?: boolean
}

const MedalIcon: React.FC<IconProps> = ({ className = "", isHovered = false }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_599_2914)">
        <path
          d="M12.5 21.75C14.5711 21.75 16.25 20.0711 16.25 18C16.25 15.9289 14.5711 14.25 12.5 14.25C10.4289 14.25 8.75 15.9289 8.75 18C8.75 20.0711 10.4289 21.75 12.5 21.75Z"
          stroke={isHovered ? "#47cd63" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 14.25L20.255 10.725C20.4027 10.658 20.5279 10.5498 20.6157 10.4135C20.7034 10.2772 20.7501 10.1184 20.75 9.95625V5.34375C20.75 5.11997 20.6611 4.90536 20.5029 4.74713C20.3446 4.58889 20.13 4.5 19.9062 4.5H5.09375C4.86997 4.5 4.65536 4.58889 4.49713 4.74713C4.3389 4.90536 4.25 5.11997 4.25 5.34375V9.95625C4.24991 10.1184 4.29656 10.2772 4.38434 10.4135C4.47213 10.5498 4.59734 10.658 4.745 10.725L12.5 14.25Z"
          stroke={isHovered ? "#47cd63" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.25 4.5V12.5456"
          stroke={isHovered ? "#47cd63" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.75 4.5V12.5456"
          stroke={isHovered ? "#47cd63" : "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_599_2914">
          <rect width="24" height="24" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default MedalIcon

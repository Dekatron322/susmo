import React, { useState } from "react"

export interface IconProps {
  className?: string
}

const YoutubeIcon: React.FC<IconProps> = ({ className = "" }) => {
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
      <g clip-path="url(#clip0_406_333)">
        <path
          d="M19.2337 15.3881L13.5421 11.5938V19.1825L19.2337 15.3881Z"
          stroke={isHovered ? "#47CD63" : "white"}
          stroke-width="1.8972"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.10742 15.3884C3.10742 18.935 3.47145 21.0148 3.74891 22.0844C3.82228 22.3753 3.96361 22.6446 4.16128 22.8703C4.35895 23.0961 4.60734 23.2717 4.88604 23.3827C8.86067 24.9159 15.4392 24.8744 15.4392 24.8744C15.4392 24.8744 22.0177 24.9159 25.9924 23.3827C26.2719 23.2723 26.5213 23.0969 26.7198 22.8712C26.9183 22.6455 27.0604 22.3758 27.1342 22.0844C27.4117 21.0172 27.7757 18.935 27.7757 15.3884C27.7757 11.8419 27.4117 9.76206 27.1342 8.69252C27.0612 8.40002 26.9196 8.12914 26.721 7.90231C26.5224 7.67548 26.2726 7.49924 25.9924 7.3882C22.0177 5.86095 15.4392 5.90245 15.4392 5.90245C15.4392 5.90245 8.86067 5.86095 4.88604 7.39412C4.60577 7.50517 4.356 7.68141 4.15742 7.90824C3.95884 8.13507 3.81718 8.40595 3.74417 8.69845C3.47145 9.76088 3.10742 11.8419 3.10742 15.3884Z"
          stroke={isHovered ? "#47CD63" : "white"}
          stroke-width="1.8972"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_406_333">
          <rect
            width="30.3551"
            height="30.3551"
            fill={isHovered ? "#47CD63" : "white"}
            transform="translate(0.261719 0.210938)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default YoutubeIcon

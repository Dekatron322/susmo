"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import NavMenu from "public/susmo/nav_menu"
import { useEffect, useRef, useState } from "react"
import { RiMenuLine } from "react-icons/ri"
import { RxCross2 } from "react-icons/rx"

const NewNav = () => {
  const [activeLink, setActiveLink] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveLink(section.id)
        }
      })

      // Check if the scroll position is greater than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const router = useRouter()

  const handleAccountClick = () => {
    const user = localStorage.getItem("user")
    if (user) {
      router.push("/profile")
    } else {
      router.push("/signin")
    }
  }

  const session = null
  return (
    <>
      <nav
        className={`flexBetween navbar paddings z-50  items-center max-xl:block  xl:hidden ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className=" content-center">
            <Image src="/susmo/logo.svg" width={80} height={80} alt="dekalo" />
          </Link>
          <div onClick={toggleNav} style={{ cursor: "pointer" }}>
            <NavMenu />
          </div>
        </div>

        <div
          ref={navRef}
          className={`fixed left-0 top-0 z-50 h-full w-full bg-[#000000] transition-transform duration-300 ${
            isNavOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 pt-6">
            <Image className="" src="/susmo/logo.svg" height={80} width={80} alt="" />
            <RxCross2 className="text-white" onClick={toggleNav} style={{ cursor: "pointer" }} />
          </div>
          <div className="mt-4 flex flex-col items-start gap-5 space-y-2 p-4">
            <a
              onClick={toggleNav}
              href="/"
              className={activeLink === "/" ? "border-b-3  border-[#47CD63] font-normal  text-white" : "  text-white"}
            >
              Home
            </a>

            <a
              onClick={toggleNav}
              href="/why-susmo"
              className={
                activeLink === "motors" ? "border-b-3  border-[#47CD63] font-normal  text-white" : "  text-white"
              }
            >
              Motors
            </a>
            <Link
              onClick={toggleNav}
              href="/brrike"
              className={
                activeLink === "specifications"
                  ? "border-b-3  border-[#47CD63] font-normal  text-white"
                  : "  text-white"
              }
            >
              Brrike
            </Link>

            <Link
              onClick={toggleNav}
              href="/drone"
              className={
                activeLink === "other-products"
                  ? "border-b-3  border-[#47CD63] font-normal  text-white"
                  : "e text-white"
              }
            >
              Drone
            </Link>
            <a
              href="/about"
              onClick={toggleNav}
              className={
                activeLink === "contact" ? "border-b-3  border-[#47CD63] font-normal  text-white" : "  text-white"
              }
            >
              About Us
            </a>

            <a
              href="/solutions"
              onClick={toggleNav}
              className={
                activeLink === "contact" ? "border-b-3  border-[#47CD63] font-normal  text-white" : "  text-white"
              }
            >
              Solutions
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NewNav

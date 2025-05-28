import Image from "next/image"

import React, { useEffect, useState } from "react"

import { GoArrowRight, GoMoon } from "react-icons/go"
import { AnimatePresence, motion } from "framer-motion"
import { CgChevronDown, CgMenu } from "react-icons/cg"

import Link from "next/link"

const DashboardNav = () => {
  const [activeLink, setActiveLink] = useState("")
  const [mounted, setMounted] = useState(false)

  const [openPopover, setOpenPopover] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  if (!mounted) {
    return null
  }

  const handlePopover = (item: any) => {
    setOpenPopover(openPopover === item ? null : item)
  }

  const renderPopoverContent = (item: string) => {
    switch (item) {
      case "Motors":
        return (
          <div className="flex items-center justify-center gap-10  bg-[#F7F7F7]  py-6 text-[#000000CC] ">
            <div className="border-[#00000026 border-r pr-10">
              <img src="/susmo/drives.svg" alt="" />
              <p className="text-center text-xl font-bold">Drives</p>
              <p className="text-center text-sm">Powers all our Products</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-medium text-xs text-[#00000066]">Preview EV Brike</p>
              <Link href="/why-susmo/#why-susmo">Why Susmo?</Link>
              <a href="/why-susmo/#proprietary">Proprietary Clean Tech</a>
              <Link href="/why-susmo/#dimensions">Dimensions</Link>
            </div>
          </div>
        )

      case "Brrike":
        return (
          <div className="flex items-center justify-center gap-10  bg-[#F7F7F7]  py-6 text-[#000000CC] ">
            <div className="border-[#00000026 border-r pr-10">
              <img src="/susmo/brrike-motor.svg" alt="" />
              <p className="text-center text-xl font-bold">EV Brrike</p>
              <p className="text-center text-sm">Ground Mobility</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-medium text-xs text-[#00000066]">Preview EV Brrike</p>
              <Link href="/brrike/#specifications">Specifications</Link>
              <Link href="/brrike/#gallery">Gallery</Link>
              <Link href="/brrike/#dimensions">Dimensions</Link>
            </div>
          </div>
        )
      case "Drone":
        return (
          <div className="flex items-center justify-center gap-10  bg-[#F7F7F7]  py-6 text-[#000000CC] ">
            <div className="border-[#00000026 border-r pr-10">
              <img src="/susmo/aeral-drone.svg" alt="" />
              <p className="text-center text-xl font-bold">Aeral Drones</p>
              <p className="text-center text-sm">Sky Mobility</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-medium text-xs text-[#00000066]">Preview Aeral Drone</p>
              <Link href="/drone/#specifications">Specifications</Link>
              <Link href="/drone/#gallery">Gallery</Link>
              <Link href="/drone/#dimensions">Dimensions</Link>
            </div>
          </div>
        )
      case "About Us":
        return (
          <div className="flex items-center justify-center gap-10  bg-[#F7F7F7]  py-6 text-[#000000CC] ">
            <div className="border-[#00000026 border-r pr-10">
              <img src="/susmo/about-us.svg" alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-medium text-xs text-[#00000066]">About Us</p>
              <Link href="/about">Company Vision</Link>
              <Link href="/about/#verticals">Our Verticals</Link>
              <Link href="/about/#goals">Goals</Link>
              <Link href="/about/#objectives">Objectives</Link>
              <Link href="/about/#business-model">Business Model</Link>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className={`flexBetween navbar  z-50  items-center text-white  max-xl:hidden ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="hero-container z-50 flex w-full items-center justify-between p-4 px-16 backdrop-blur max-sm:flex-col-reverse max-sm:gap-3 max-sm:rounded-xl max-sm:px-3 lg:px-20 xl:rounded-full xl:px-16 2xl:px-24 3xl:px-48">
        <div className="flex items-center gap-10 max-sm:w-full max-sm:justify-between">
          <Link href="/">
            <img src="/susmo/logo.svg" alt="" className="h-10" />
          </Link>
          <button className="sm:hidden" onClick={toggleMobileMenu}>
            <CgMenu className="h-6 w-6" />
          </button>
        </div>

        <div
          className={`flex items-center gap-10 max-sm:w-full max-sm:flex-col max-sm:items-start ${
            isMobileMenuOpen ? "max-sm:flex" : "max-sm:hidden"
          }`}
        >
          <ul className="flex gap-10 max-sm:flex-col max-sm:gap-4">
            {["Home", "Motors", "Brrike", "Drone", "About Us", "Solutions"].map((item) => (
              <li
                key={item}
                className="link-items relative flex cursor-pointer items-center gap-2"
                onMouseEnter={() => handlePopover(item)}
                onMouseLeave={() => handlePopover(null)}
              >
                {item === "Solutions" ? (
                  <Link href="/solutions">{item}</Link>
                ) : item === "Home" ? (
                  <Link href="/">{item}</Link>
                ) : (
                  <>
                    {item}
                    {(item === "Home" ||
                      item === "Motors" ||
                      item === "Brrike" ||
                      item === "Drone" ||
                      item === "About Us") && (
                      <motion.div
                        animate={{
                          rotate: openPopover === item ? -180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                    )}

                    {(item === "Home" ||
                      item === "Motors" ||
                      item === "Brrike" ||
                      item === "Drone" ||
                      item === "About Us") && (
                      <AnimatePresence>
                        {openPopover === item && (
                          <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="nav-list-item fixed left-0 right-0 top-full cursor-pointer shadow-lg dark:bg-gray-800"
                            style={{ width: "100%" }}
                          >
                            <div className=" mx-auto ">{renderPopoverContent(item)}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        <a className={"flex cursor-pointer gap-2 text-white transition-all duration-300 ease-in-out "}>
          <Image src="/susmo/globe.svg" width={24} height={24} alt="dekalo" />
          English
        </a>
      </div>
    </motion.nav>
  )
}

export default DashboardNav

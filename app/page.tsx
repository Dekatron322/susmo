"use client"
import Image from "next/image"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import { useRouter } from "next/navigation"
import { ButtonModule } from "components/Button/Button"
import ArrowIcon from "public/susmo/ArrowUpRight"
import NewNav from "components/Navbar/NewNav"

export default function Web() {
  const router = useRouter()
  const [showCookieConsent, setShowCookieConsent] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consented = localStorage.getItem("cookieConsent")
    if (!consented) {
      setShowCookieConsent(true)
    }
  }, [])

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowCookieConsent(false)
  }

  const handleProductClick = () => {
    router.push("/our-product")
  }

  const handleWhyClick = () => {
    router.push("/why-susmo")
  }

  return (
    <section className="bg-black">
      <Navbar />
      <NewNav />
      <section
        id="about"
        className="about-section relative grid w-full items-center justify-center bg-black py-16 md:h-svh"
      >
        {/* Replaced video with Image component */}
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Image
            src="/susmo/bg-image.svg"
            alt="Background"
            fill
            className="object-cover opacity-80 max-sm:hidden"
            quality={100}
            priority
          />
          <Image
            src="/susmo/mobile-bg.png"
            alt="Background"
            fill
            className="object-cover opacity-80 md:hidden"
            quality={100}
            priority
          />
        </div>

        <motion.div
          className="paddings relative z-10 pb-10 max-sm:px-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full w-full items-center max-xl:mt-2 max-xl:justify-center max-xl:text-center max-sm:justify-center lg:mt-0 lg:items-center">
            <div className="flex w-full flex-col items-center justify-center">
              <p className="headfont text-center text-6xl font-semibold text-[#FFFFFF] max-xl:px-16 max-xl:text-3xl max-lg:mt-5 max-lg:text-4xl max-sm:text-3xl xl:w-[935px]">
                Reimagining <span className="text-[#47CD63]">Sustainable Mobility</span> — On the Ground and in the Sky
              </p>

              <p className="mt-4 text-center text-lg leading-7 text-[#ffffffcc] max-xl:text-base max-sm:px-16 max-sm:text-sm md:max-w-[643px]">
                From electric drives to aerial automation, Susmo is building smart mobility systems for logistics,
                agriculture, and beyond.
              </p>

              <div className="mt-8 flex w-full justify-center gap-5 max-sm:flex-col max-sm:gap-4">
                <ButtonModule
                  onClick={handleWhyClick}
                  variant="outline"
                  size="md"
                  icon={<ArrowIcon />}
                  iconPosition="end"
                >
                  Why Susmo?
                </ButtonModule>

                <ButtonModule
                  type="button"
                  variant="primary"
                  size="md"
                  icon={<ArrowIcon />}
                  iconPosition="end"
                  onClick={handleProductClick}
                >
                  Our Products
                </ButtonModule>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#F7F7F7] p-4 shadow-lg"
        >
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-[#000000]  md:text-base">
              This website uses cookies and similar technologies (“Cookies”). By clicking “Accept All”, you consent to
              the use of cookies to analyse and improve our website and to make our content and advertisements more
              relevant to your interests. You can click “Cookie Settings” to change these settings at any time and find
              more information about how we use cookies in our Cookie Policy
            </p>
            <button
              onClick={handleAcceptCookies}
              className="whitespace-nowrap rounded-md bg-[#47CD63] px-4 py-2 text-sm font-medium text-white hover:bg-[#3bb356] focus:outline-none focus:ring-2 focus:ring-[#47CD63] focus:ring-offset-2"
            >
              Accept Cookies
            </button>
          </div>
        </motion.div>
      )}

      <MainFooter />
    </section>
  )
}

"use client"

import Footer from "components/Footer/Footer"
import Image from "next/image"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import { useRouter } from "next/navigation"
import { ButtonModule } from "components/Button/Button"
import ArrowIcon from "public/susmo/ArrowUpRight"
import PlayIcon from "public/susmo/play"
import SolutionIcon from "public/susmo/solution-icon"
import Link from "next/link"
import { FormInputModule } from "components/Button/InputeModule"
import NewNav from "components/Navbar/NewNav"

export default function Web() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [searchText, setSearchText] = useState("")

  const handleProductClick = () => {
    router.push("/our-product")
  }

  const handleExploreClick = () => {
    router.push("/solutions")
  }

  const handleEnquireClick = () => {
    router.push("/enquire")
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  useEffect(() => {
    // Filter categories based on search text
  }, [searchText])

  return (
    <section className="bg-black">
      <Navbar />
      <NewNav />
      <section
        id="about"
        className="about-section relative w-full items-center justify-between bg-black py-16 lg:h-screen"
      >
        {/* Replaced video with Image component */}
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Image
            src="/susmo/brrike.svg"
            alt="Background"
            fill
            className="object-cover opacity-100"
            quality={100}
            priority
          />
        </div>

        <motion.div
          className="paddings relative z-10 flex h-full flex-col justify-between pb-10 max-sm:px-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full w-full  max-xl:mt-2 max-xl:justify-center max-xl:text-center max-sm:justify-center lg:mt-0">
            <div className="flex w-full flex-col  justify-between">
              <div className="flex w-full items-end justify-end md:mt-20">
                <PlayIcon className="max-sm:h-10 max-sm:w-10" />
              </div>
            </div>
          </div>
          <div className="headfont text-medium text-5xl text-[#ffffff]">
            <p className="mt-5 text-center text-2xl font-bold md:hidden">Brrike</p>
            <p className="mb:w-[671px] mb-28 max-sm:px-5 max-sm:text-center max-sm:text-2xl">
              Sustainable Mobility On <span className="underline">Ground</span>
            </p>
            <div className="flex w-full items-center justify-between gap-5 max-sm:gap-2">
              <p className="headfont text-5xl font-bold max-sm:hidden">Brrike</p>
              <div className="flex gap-5 max-sm:w-full max-sm:flex-col max-sm:items-center">
                <ButtonModule
                  onClick={handleEnquireClick}
                  variant="secondary"
                  size="md"
                  icon={<ArrowIcon />}
                  iconPosition="end"
                >
                  Enquire
                </ButtonModule>

                <ButtonModule
                  type="button"
                  variant="primary"
                  size="md"
                  icon={<ArrowIcon />}
                  iconPosition="end"
                  onClick={handleProductClick}
                >
                  Learn More
                </ButtonModule>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section
        id="about"
        className="about-section relative w-full items-center justify-between bg-black py-16 lg:h-screen"
      >
        {/* Replaced video with Image component */}
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Image
            src="/susmo/drone.svg"
            alt="Background"
            fill
            className="object-cover opacity-100"
            quality={100}
            priority
          />
        </div>

        <motion.div
          className="paddings relative z-10 flex h-full flex-col justify-between pb-10 max-sm:px-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full w-full  max-xl:mt-2 max-xl:justify-center max-xl:text-center max-sm:justify-center lg:mt-0">
            <div className="flex w-full flex-col  justify-between">
              <div className="flex w-full items-end justify-end md:mt-20">
                <PlayIcon className="max-sm:h-10 max-sm:w-10" />
              </div>
            </div>
          </div>
          <div className="headfont text-medium text-5xl text-[#ffffff]">
            <p className="mt-5 text-center text-2xl font-bold md:hidden">Drone</p>
            <p className="mb:w-[671px] mb-28 max-sm:px-5 max-sm:text-center max-sm:text-2xl">
              Sustainable Mobility On The<span className="underline"> Sky</span>
            </p>
            <div className="flex w-full items-center justify-between gap-5 max-sm:gap-2">
              <p className="headfont text-5xl font-bold max-sm:hidden">Drone</p>
              <div className="flex gap-5 max-sm:w-full max-sm:flex-col max-sm:items-center">
                <ButtonModule
                  onClick={handleEnquireClick}
                  variant="secondary"
                  size="md"
                  icon={<ArrowIcon />}
                  iconPosition="end"
                >
                  Enquire
                </ButtonModule>

                <ButtonModule
                  type="button"
                  variant="primary"
                  size="md"
                  icon={<ArrowIcon />}
                  iconPosition="end"
                  onClick={handleProductClick}
                >
                  Learn More
                </ButtonModule>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="paddings relative flex w-full  flex-col items-center justify-between bg-[#FFFFFF] max-sm:gap-6 md:gap-16 md:pt-16">
        <div className="flex flex-col items-center">
          <p className="headfont px-5 text-center text-6xl font-semibold max-sm:text-2xl">Solutions</p>
          <div className="h-1 w-20 bg-green-500"></div>
        </div>
        <div className="grid w-full gap-6 max-sm:grid-cols-1 max-sm:gap-4 md:grid-cols-3">
          <div className="flex w-full flex-col gap-4 rounded-3xl bg-[#F7F7F7] p-6">
            <SolutionIcon className="max-sm:h-10 max-sm:w-10" />
            <p className="headfont text-xl font-semibold">Drone-spraying-as-a-service</p>
            <p className="text-sm">
              Precision drone spraying boosts crop health and saves input costs, delivering uniform coverage, reduced
              labor, and targeted pest control tailored to each field’s unique needs.
            </p>
            <Link
              href="/enquire"
              className="mt-auto text-sm font-semibold underline transition-all duration-300 ease-in-out hover:text-[#47CD63]"
            >
              Enquire Now
            </Link>
          </div>
          <div className="flex w-full flex-col gap-4 rounded-3xl bg-[#F7F7F7] p-6">
            <SolutionIcon className="max-sm:h-10 max-sm:w-10" />
            <p className="headfont text-xl font-semibold">Rural logistics optimization</p>
            <p className="text-sm">
              AI-powered logistics planning ensures efficient routes, timely deliveries, and reduced costs for rural
              cargo movement — addressing last-mile gaps with smart load balancing and deployment.
            </p>
            <Link
              href="/enquire"
              className="mt-auto text-sm font-semibold underline transition-all duration-300 ease-in-out hover:text-[#47CD63]"
            >
              Enquire Now
            </Link>
          </div>
          <div className="flex w-full flex-col gap-4 rounded-3xl bg-[#F7F7F7] p-6">
            <SolutionIcon className="max-sm:h-10 max-sm:w-10" />
            <p className="headfont text-xl font-semibold">Fleet monitoring dashboards</p>
            <p className="text-sm">
              Track vehicle and drone performance in real-time with dashboards that offer live location, health stats,
              route logs, and predictive maintenance alerts for better fleet uptime.
            </p>
            <Link
              href="/enquire"
              className="mt-auto text-sm font-semibold underline transition-all duration-300 ease-in-out hover:text-[#47CD63]"
            >
              Enquire Now
            </Link>
          </div>
        </div>
        <ButtonModule
          type="button"
          variant="outlineTwo"
          size="md"
          icon={<ArrowIcon />}
          iconPosition="end"
          onClick={() => handleExploreClick()}
        >
          Explore All
        </ButtonModule>
      </section>
      <section id="about" className="about-section relative w-full items-center justify-between bg-black py-16 ">
        {/* Replaced video with Image component */}
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Image
            src="/susmo/footbg.svg"
            alt="Background"
            fill
            className="object-cover opacity-100"
            quality={100}
            priority
          />
        </div>

        <motion.div
          className="paddings relative z-10 flex h-full flex-col justify-between max-xl:px-3 md:pb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full w-full  max-xl:mt-2  max-xl:justify-center max-xl:text-center lg:mt-0">
            <div className="flex w-full flex-col  justify-between">
              <div className="flex w-full items-center justify-center max-xl:mb-10 md:mb-20">
                <p className="headfont text-3xl font-semibold text-white max-xl:text-2xl md:w-[392px]">
                  Powering Smart Mobility — On Roads and Above
                </p>
              </div>
            </div>
          </div>
          <div className="headfont text-medium flex justify-between rounded-3xl bg-black text-5xl text-[#ffffff] max-xl:flex-col max-xl:p-8 max-xl:text-2xl max-sm:p-4 xl:h-[351px] xl:items-center xl:px-[100px]">
            <p className="md:leading-[60px]  xl:w-[660px]">Never miss an update, offers and invites.</p>
            <div className="flex flex-col  items-end justify-end md:gap-4">
              <FormInputModule
                label=""
                type="name"
                placeholder="email"
                value={username}
                onChange={handleUsernameChange}
                className="mb-3 max-xl:mt-6 max-xl:w-full md:w-[400px]"
              />
              <ButtonModule
                type="button"
                variant="primaryOutline"
                size="md"
                icon={<ArrowIcon />}
                iconPosition="end"
                onClick={handleProductClick}
              >
                Subscribe
              </ButtonModule>
              <p className="text-end text-sm  text-[#FFFFFFCC] max-xl:my-6 md:w-[400px]">
                By submitting, I agree to receive future communications from Susmo and I have read and agree to Susmo
                Terms and acknowledge the Data Privacy Notice.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <MainFooter />
    </section>
  )
}

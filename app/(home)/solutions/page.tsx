"use client"

import Footer from "components/Footer/Footer"
import Image from "next/image"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
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

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  useEffect(() => {
    // Filter categories based on search text
  }, [searchText])

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <section className="bg-black">
      <Navbar />
      <NewNav />
      <section
        id="about"
        className="about-section relative grid w-full items-center justify-center bg-black max-sm:py-4 md:h-[450px] md:py-16"
      >
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Image
            src="/susmo/solutions.svg"
            alt="Background"
            fill
            className="object-cover opacity-80"
            quality={100}
            priority
          />
        </div>

        <motion.div
          className="paddings relative z-10 pb-10 max-sm:px-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={scaleUp}
        >
          <div className="flex h-full w-full items-center max-xl:mt-2 max-xl:justify-center max-xl:text-center max-sm:justify-center lg:mt-0 lg:items-center">
            <div className="flex w-full flex-col items-center justify-center">
              <motion.p
                className="headfont text-center text-6xl font-semibold text-[#FFFFFF] max-xl:text-3xl max-lg:mt-5 max-lg:text-4xl"
                variants={item}
              >
                Solutions
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="paddings relative flex w-full flex-col items-center justify-between gap-16 bg-[#FFFFFF] md:py-24">
        <motion.div
          className="grid w-full gap-6 max-sm:grid-cols-1 max-sm:gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.div
            className="flex w-full flex-col gap-4 rounded-3xl border border-[#0000001A] bg-[#F7F7F7] p-6 max-sm:rounded-xl max-sm:p-4"
            variants={item}
          >
            <SolutionIcon className="max-sm:h-10 max-sm:w-10" />
            <p className="headfont text-xl font-semibold max-sm:text-sm">Drone spraying as a service</p>
            <p className="text-sm max-sm:text-xs">
              Precision drone spraying boosts crop health and saves input costs, delivering uniform coverage, reduced
              labor, and targeted pest control tailored to each field's unique needs.
            </p>
            <Link
              href="/enquire"
              className="mt-auto text-sm font-semibold underline transition-all duration-300 ease-in-out hover:text-[#47CD63]"
            >
              Enquire Now
            </Link>
          </motion.div>

          <motion.div
            className="flex w-full flex-col gap-4 rounded-3xl border border-[#0000001A] bg-[#F7F7F7] p-6 max-sm:rounded-xl max-sm:p-4"
            variants={item}
          >
            <SolutionIcon className="max-sm:h-10 max-sm:w-10" />
            <p className="headfont text-xl font-semibold max-sm:text-sm">Rural logistics optimization</p>
            <p className="text-sm max-sm:text-xs">
              AI-powered logistics planning ensures efficient routes, timely deliveries, and reduced costs for rural
              cargo movement — addressing last-mile gaps with smart load balancing and deployment.
            </p>
            <Link
              href="/enquire"
              className="mt-auto text-sm font-semibold underline transition-all duration-300 ease-in-out hover:text-[#47CD63]"
            >
              Enquire Now
            </Link>
          </motion.div>

          <motion.div
            className="flex w-full flex-col gap-4 rounded-3xl border border-[#0000001A] bg-[#F7F7F7] p-6 max-sm:rounded-xl max-sm:p-4"
            variants={item}
          >
            <SolutionIcon className="max-sm:h-10 max-sm:w-10" />
            <p className="headfont text-xl font-semibold max-sm:text-sm">Fleet monitoring dashboards</p>
            <p className="text-sm max-sm:text-xs">
              Track vehicle and drone performance in real-time with dashboards that offer live location, health stats,
              route logs, and predictive maintenance alerts for better fleet uptime.
            </p>
            <Link
              href="/enquire"
              className="mt-auto text-sm font-semibold underline transition-all duration-300 ease-in-out hover:text-[#47CD63]"
            >
              Enquire Now
            </Link>
          </motion.div>

          <motion.div
            className="flex w-full flex-col gap-4 rounded-3xl border border-[#0000001A] bg-[#F7F7F7] p-6 max-sm:rounded-xl max-sm:p-4"
            variants={item}
          >
            <SolutionIcon className="max-sm:h-10 max-sm:w-10" />
            <p className="headfont text-xl font-semibold max-sm:text-sm">Battery swapping stations</p>
            <p className="text-sm max-sm:text-xs">
              Minimize EV downtime with our rural-compatible battery swapping infrastructure — enabling quick swaps,
              load balancing, and off-grid energy options for seamless operations.
            </p>
            <Link
              href="/enquire"
              className="mt-auto text-sm font-semibold underline transition-all duration-300 ease-in-out hover:text-[#47CD63]"
            >
              Enquire Now
            </Link>
          </motion.div>

          <motion.div
            className="flex w-full flex-col gap-4 rounded-3xl border border-[#0000001A] bg-[#F7F7F7] p-6 max-sm:rounded-xl max-sm:p-4"
            variants={item}
          >
            <SolutionIcon className="max-sm:h-10 max-sm:w-10" />
            <p className="headfont text-xl font-semibold max-sm:text-sm">Precision agriculture data insights</p>
            <p className="text-sm max-sm:text-xs">
              Harness satellite, drone, and ground sensor data to derive actionable insights — from soil health and
              moisture to crop maturity and yield forecasting.
            </p>
            <Link
              href="/enquire"
              className="mt-auto text-sm font-semibold underline transition-all duration-300 ease-in-out hover:text-[#47CD63]"
            >
              Enquire Now
            </Link>
          </motion.div>

          <motion.div
            className="flex w-full flex-col gap-4 rounded-3xl border border-[#0000001A] bg-[#F7F7F7] p-6 max-sm:rounded-xl max-sm:p-4"
            variants={item}
          >
            <SolutionIcon className="max-sm:h-10 max-sm:w-10" />
            <p className="headfont text-xl font-semibold max-sm:text-sm">Solar-integrated charging options</p>
            <p className="text-sm max-sm:text-xs">
              Green energy meets rural mobility. Our solar-based EV charging units reduce grid dependency and power
              Susmo fleets sustainably — even in off-grid locations.
            </p>
            <Link
              href="/enquire"
              className="mt-auto text-sm font-semibold underline transition-all duration-300 ease-in-out hover:text-[#47CD63]"
            >
              Enquire Now
            </Link>
          </motion.div>

          <motion.div
            className="flex w-full flex-col gap-4 rounded-3xl border border-[#0000001A] bg-[#F7F7F7] p-6 max-sm:rounded-xl max-sm:p-4"
            variants={item}
          >
            <SolutionIcon className="max-sm:h-10 max-sm:w-10" />
            <p className="headfont text-xl font-semibold max-sm:text-sm">Custom modular trolleys</p>
            <p className="text-sm max-sm:text-xs">
              Customize cargo trolleys to match diverse rural needs — from milk transport to agri tools — with modular
              builds, weatherproofing, and adaptable load systems.
            </p>
            <Link
              href="/enquire"
              className="mt-auto text-sm font-semibold underline transition-all duration-300 ease-in-out hover:text-[#47CD63]"
            >
              Enquire Now
            </Link>
          </motion.div>

          <motion.div
            className="flex w-full flex-col gap-4 rounded-3xl border border-[#0000001A] bg-[#F7F7F7] p-6 max-sm:rounded-xl max-sm:p-4"
            variants={item}
          >
            <SolutionIcon className="max-sm:h-10 max-sm:w-10" />
            <p className="headfont text-xl font-semibold max-sm:text-sm">Remote diagnostics & service support</p>
            <p className="text-sm max-sm:text-xs">
              Diagnose and resolve issues remotely using IoT-backed support tools, reducing service delays and ensuring
              uptime even in the remotest operating zones.
            </p>
            <Link
              href="/enquire"
              className="mt-auto text-sm font-semibold underline transition-all duration-300 ease-in-out hover:text-[#47CD63]"
            >
              Enquire Now
            </Link>
          </motion.div>

          <motion.div
            className="flex w-full flex-col gap-4 rounded-3xl border border-[#0000001A] bg-[#F7F7F7] p-6 max-sm:rounded-xl max-sm:p-4"
            variants={item}
          >
            <SolutionIcon className="max-sm:h-10 max-sm:w-10" />
            <p className="headfont text-xl font-semibold max-sm:text-sm">EV leasing for smallholder operators</p>
            <p className="text-sm max-sm:text-xs">
              Low-cost leasing options make electric vehicles accessible to small farmers and entrepreneurs, enabling
              sustainable livelihood tools with minimal upfront investment.
            </p>
            <Link
              href="/enquire"
              className="mt-auto text-sm font-semibold underline transition-all duration-300 ease-in-out hover:text-[#47CD63]"
            >
              Enquire Now
            </Link>
          </motion.div>

          <motion.div
            className="flex w-full flex-col gap-4 rounded-3xl border border-[#0000001A] bg-[#F7F7F7] p-6 max-sm:rounded-xl max-sm:p-4"
            variants={item}
          >
            <SolutionIcon className="max-sm:h-10 max-sm:w-10" />
            <p className="headfont text-xl font-semibold max-sm:text-sm">Rural mobility rollout</p>
            <p className="text-sm max-sm:text-xs">
              We co-create mobility blueprints for villages and towns, deploying electric cargo and drone fleets with
              infrastructure support, community training, and phased implementation.
            </p>
            <Link
              href="/enquire"
              className="mt-auto text-sm font-semibold underline transition-all duration-300 ease-in-out hover:text-[#47CD63]"
            >
              Enquire Now
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="about-section relative w-full items-center justify-between bg-black py-16">
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <div className="flex h-full w-full max-xl:mt-2 max-xl:justify-center max-xl:text-center lg:mt-0">
            <div className="flex w-full flex-col justify-between">
              <motion.div className="flex w-full items-center justify-center max-xl:mb-10 md:mb-20" variants={item}>
                <p className="headfont text-3xl font-semibold text-white max-xl:text-2xl md:w-[392px]">
                  Powering Smart Mobility — On Roads and Above
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="headfont text-medium flex justify-between rounded-3xl bg-black text-5xl text-[#ffffff] max-xl:flex-col max-xl:p-8 max-xl:text-2xl max-sm:p-4 xl:h-[351px] xl:items-center xl:px-[100px]"
            variants={item}
          >
            <motion.p className="md:leading-[60px] xl:w-[660px]" variants={item}>
              Never miss an update, offers and invites.
            </motion.p>
            <motion.div className="flex flex-col items-end justify-end md:gap-4" variants={item}>
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
              <p className="text-end text-sm text-[#FFFFFFCC] max-xl:my-6 md:w-[400px]">
                By submitting, I agree to receive future communications from Susmo and I have read and agree to Susmo
                Terms and acknowledge the Data Privacy Notice.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <MainFooter />
    </section>
  )
}

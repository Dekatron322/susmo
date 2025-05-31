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

export default function Drone() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [searchText, setSearchText] = useState("")

  const handleProductClick = () => {
    router.push("/our-product")
  }

  const handleExploreClick = () => {
    router.push("/solutions")
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
        staggerChildren: 0.2,
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

  const slideInFromLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const slideInFromRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
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
                Drone
              </motion.p>
              <motion.p className="mt-4 text-center text-2xl text-white max-sm:text-base md:w-[522px]" variants={item}>
                Re-imagining Sustainable Mobility in the Sky
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="specifications"
        className="paddings relative flex w-full flex-col items-center justify-between bg-[#FFFFFF] max-sm:gap-6 md:gap-16 md:py-24"
      >
        <motion.img
          src="/susmo/drone1.svg"
          alt=""
          className="h-[658px] w-full rounded-2xl object-cover max-sm:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        />
        <motion.img
          src="/susmo/drone01.png"
          alt=""
          className="w-full rounded-2xl object-cover md:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        />

        <motion.div
          className="headfont grid w-full grid-cols-2 items-center justify-center gap-10 text-center md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.div className="flex flex-col md:gap-6 md:border-r md:pr-10" variants={item}>
            <p className="text-2xl max-xl:text-base max-sm:text-sm">Cage Diameter¹</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">2000 mm</p>
          </motion.div>
          <motion.div className="flex flex-col md:gap-6 md:border-r md:pr-10" variants={item}>
            <p className="text-2xl max-xl:text-base max-sm:text-sm">Total Height¹</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">1100 mm</p>
          </motion.div>
          <motion.div className="flex flex-col md:gap-6 md:border-r md:pr-10" variants={item}>
            <p className="text-2xl max-xl:text-base max-sm:text-sm">Motor Mount Spacing¹</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">1400 mm</p>
          </motion.div>
          <motion.div className="flex flex-col md:gap-6" variants={item}>
            <p className="text-2xl max-xl:text-base max-sm:text-sm">Propeller Diameter</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">800 mm</p>
          </motion.div>
        </motion.div>
      </section>

      <section
        id="about"
        className="about-section relative grid w-full items-center justify-center bg-black py-16 max-sm:h-[685px] max-sm:items-end md:h-[541px]"
      >
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Image
            src="/susmo/drone2.svg"
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
                className="headfont text-center text-2xl text-[#FFFFFF] max-lg:mt-5 max-sm:text-base md:max-w-[970px] md:font-medium md:leading-[48px]"
                variants={item}
              >
                An AI‑driven agricultural drone that autonomously sprays and monitors crops with adaptive nozzles and
                multispectral imaging, swarms to cover large areas, adapts to terrain and weather, self‑charges,
                disperses biodegradable seed pods, and logs all data on blockchain for efficient, sustainable farming.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="gallery"
        className="paddings headfont relative flex w-full flex-col bg-[#FFFFFF] md:items-center md:gap-6 md:py-24"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="flex flex-col items-center gap-6"
        >
          <motion.p className="text-6xl font-semibold max-sm:text-3xl" variants={item}>
            Built for <br className="md:hidden" /> Performance
          </motion.p>
          <motion.p className="mb-4 md:w-[760px] md:text-center md:text-xl" variants={item}>
            25-liter smart spray. AgriDrone 8X hauls a 25 kg payload with ease and takes off at 70 kg MTOW, delivering
            25-minute flights with pinpoint coverage.
          </motion.p>
          <motion.div
            className="headfont hide-scrollbar flex w-full items-center justify-start gap-6 overflow-x-auto max-sm:mt-4 md:px-4"
            variants={item}
          >
            <img src="/susmo/drone3.svg" alt="" />
            <img src="/susmo/drone4.svg" alt="" />
            <img src="/susmo/drone5.svg" alt="" />
            <img src="/susmo/drone6.svg" alt="" />
          </motion.div>
        </motion.div>
      </section>

      <section
        id="dimensions"
        className="paddings headfont relative flex w-full flex-col items-center gap-6 bg-[#164781] md:py-24"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="flex flex-col items-center gap-6"
        >
          <motion.div className="flex flex-col items-center" variants={item}>
            <p className="headfont px-5 text-center text-6xl font-semibold text-[#ffffff] max-sm:text-2xl">
              Dimensions
            </p>
            <div className="h-1 w-20 bg-[#F8350E]"></div>
          </motion.div>
          <motion.div
            className="headfont flex w-full items-center justify-center max-xl:flex-col max-xl:gap-4 md:gap-16"
            variants={item}
          >
            <img src="/susmo/drone7.svg" alt="" />
            <motion.div
              className="flex flex-col gap-5 rounded-3xl border border-[#FFFFFF33] text-white max-sm:w-[324px] max-sm:p-4 md:w-[428px] md:px-16 md:py-8"
              variants={container}
            >
              <motion.div className="flex w-full items-center justify-between" variants={item}>
                <p>A. Cage Diameter</p>
                <p className="font-bold">2000 mm</p>
              </motion.div>
              <motion.div className="flex w-full items-center justify-between" variants={item}>
                <p>B. Total Height</p>
                <p className="font-bold">1100mm</p>
              </motion.div>
              <motion.div className="flex w-full items-center justify-between" variants={item}>
                <p>C. Motor Mount Spacing</p>
                <p className="font-bold">1400mm</p>
              </motion.div>
              <motion.div className="flex w-full items-center justify-between" variants={item}>
                <p>D. Propeller Diameter</p>
                <p className="font-bold">800mm</p>
              </motion.div>
            </motion.div>
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

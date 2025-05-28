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
        id="why-susmo"
        className="about-section relative grid w-full items-center justify-center bg-black max-sm:py-4 md:h-[450px] md:py-16"
      >
        {/* Replaced video with Image component */}
        <div className="absolute inset-0  h-full w-full overflow-hidden">
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full w-full items-center max-xl:mt-2 max-xl:justify-center max-xl:text-center max-sm:justify-center lg:mt-0 lg:items-center">
            <div className="flex w-full flex-col items-center justify-center">
              <p className="headfont text-center text-6xl font-semibold text-[#FFFFFF] max-xl:text-3xl max-lg:mt-5 max-lg:text-4xl max-sm:text-2xl">
                Why Susmo?
              </p>
              <p className="mt-2 px-6 text-center text-white max-sm:text-xs md:mt-4 md:w-[522px] md:text-2xl">
                We’re building more than products—we’re engineering tomorrow.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="paddings relative flex w-full  flex-col items-center justify-between bg-[#FFFFFF] max-xl:gap-6 md:gap-16 md:py-24">
        <img className="max-sm:hidden" src="/susmo/susmo.svg" alt="" />
        <img className="md:hidden" src="/susmo/why-susmo.svg" alt="" />
        <div className="headfont grid w-full grid-cols-2 items-center  text-center max-xl:gap-4 max-sm:justify-between md:flex md:justify-center md:gap-10">
          <div className="flex flex-col pr-10 md:gap-6 md:border-r">
            <p className="text-2xl max-xl:text-base max-sm:text-sm">Dual-Domain¹</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">Innovation</p>
          </div>
          <div className="flex flex-col md:gap-6 md:border-r md:pr-10">
            <p className="text-2xl max-xl:text-base max-sm:text-sm">Sustainability¹</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">At Core</p>
          </div>

          <div className="flex flex-col md:gap-6 md:border-r md:pr-10">
            <p className="text-2xl max-xl:text-base max-sm:text-sm">Built for¹</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">Bharat</p>
          </div>
          <div className="flex flex-col md:gap-6 ">
            <p className="text-2xl max-xl:text-base max-sm:text-sm">csPILLAI®¹</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">Backing</p>
          </div>
        </div>
      </section>

      <section className="paddings relative flex w-full flex-col items-center justify-between gap-6  bg-[#F7F7F7] max-sm:gap-4 md:py-24">
        <div className="headfont w-full items-center  justify-center gap-6 md:flex ">
          <div className="grid flex-col gap-3 rounded-xl bg-white p-6 max-sm:p-4 md:w-[513px]">
            <p className="text-lg font-bold ">Dual-Domain Innovation</p>
            <p className="md:text-lg md:leading-10">
              We deliver integrated ground-based EV and aerial systems to enable sustainable logistics, agricultural
              automation, and seamless mobility solutions.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-xl bg-white p-6 max-sm:mt-4 md:w-[513px]">
            <p className="text-lg font-bold">Sustainability at Core</p>
            <p className="md:text-lg md:leading-10">
              We advance cleaner, smarter, and more inclusive mobility solutions, driving India toward a sustainable and
              equitable future.
            </p>
          </div>
        </div>
        <div className="headfont w-full items-center  justify-center gap-6 md:flex ">
          <div className="grid flex-col gap-3 rounded-xl bg-white p-6 md:w-[513px]">
            <p className="text-lg font-bold">Built for Bharat</p>
            <p className="md:text-lg md:leading-10">
              Engineered for rural reliability and urban scalability in Indian conditions, our systems are
              cost-effective, robust, and future-ready.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-xl bg-white p-6 max-sm:mt-4 md:w-[513px]">
            <p className="text-lg font-bold">csPILLAI® Backing</p>
            <p className="md:text-lg md:leading-10">
              Backed by the Broad Venture Builder ecosystem, we marry deep product innovation with scalable venture
              creation and growth.
            </p>
          </div>
        </div>
      </section>
      <section
        id="proprietary"
        className="paddings headfont relative flex w-full  flex-col items-center  bg-[#FFFFFF] md:gap-6 md:py-24"
      >
        <p className="text-6xl font-semibold max-sm:text-3xl">Proprietary Clean Tech</p>
        <p className="md:w-[760px] md:text-center md:text-xl">
          Our patented improved brushless DC motor{" "}
          <span className="font-bold text-[#F8350E]">(App No. 202121020003)</span> saves 14–20 % energy, powering our
          mobility solutions with unmatched efficiency.
        </p>
        <div className="headfont hide-scrollbar flex w-full items-center justify-start gap-6 overflow-x-auto max-sm:mt-4 md:px-4">
          <img src="/susmo/susmo1.svg" alt="" />
          <img src="/susmo/susmo2.svg" alt="" />
          <img src="/susmo/susmo3.svg" alt="" />
        </div>
      </section>
      <section
        id="dimensions"
        className="paddings headfont relative flex w-full  flex-col items-center  gap-6 bg-[#0E4E89] md:py-24"
      >
        <div className="flex flex-col items-center">
          <p className="headfont px-5 text-center text-6xl font-semibold text-[#FFFFFF] max-sm:text-2xl">Dimensions</p>
          <div className="h-1 w-20 bg-[#F8350E]"></div>
        </div>

        <div className="headfont flex w-full  items-center justify-center gap-6 ">
          <img src="/susmo/dimensions.svg" alt="" />
        </div>
      </section>
      <section className="paddings headfont relative flex w-full  flex-col items-center  gap-6 bg-[#000000] md:py-24">
        <p className="headfont text-5xl font-semibold text-[#FFFFFF] max-sm:text-2xl md:px-5 md:text-center">
          Impact Snapshot (2025–2027)
        </p>
        <p className="text-[#FFFFFF]">Here’s what we aim to deliver in our first three years of scale:</p>

        <div className="headfont flex w-full flex-col  items-center justify-center gap-12 ">
          <ul className="list-inside list-disc ">
            <li className="pb-4  font-bold text-[#FFFFFFCC] ">By 2025</li>
            <li className="pb-4  text-[#FFFFFFCC] ">Deploy first fleet of Susmo EVs in targeted logistics clusters.</li>
            <li className="pb-4  text-[#FFFFFFCC] ">Pilot agri-drone operations across 100+ acres.</li>
            <li className="pb-4  text-[#FFFFFFCC] ">Begin savings of 14–20% energy using our patented BLDC motors.</li>
            <li className="pb-3  text-[#FFFFFFCC] ">Establish presence in 10 villages with integrated solutions.</li>
          </ul>
          <ul className="list-inside list-disc">
            <li className="pb-4  font-bold text-[#FFFFFFCC] ">By 2026</li>
            <li className="pb-4  text-[#FFFFFFCC] ">
              Expand EV-enabled last-mile delivery network to 5,000+ deliveries.
            </li>
            <li className="pb-4  text-[#FFFFFFCC] ">Scale aerial automation to 600+ acres.</li>
            <li className="pb-4  text-[#FFFFFFCC] ">Improve logistics efficiency by 2.5x in key rural corridors.</li>
            <li className="pb-3  text-[#FFFFFFCC] ">Reach 50 villages with ground + aerial tech deployments.</li>
          </ul>
          <ul className="list-inside list-disc">
            <li className="pb-4  font-bold text-[#FFFFFFCC] ">By 2027</li>
            <li className="pb-4  text-[#FFFFFFCC] ">Power 10,000+ deliveries through clean mobility.</li>
            <li className="pb-4  text-[#FFFFFFCC] ">Enable 1,500+ acres of land to benefit from aerial automation.</li>
            <li className="pb-4  text-[#FFFFFFCC] ">Achieve 4x operational efficiency in rural mobility.</li>
            <li className="pb-3  text-[#FFFFFFCC] ">
              Positively impact 100+ villages with smart, sustainable solutions.
            </li>
          </ul>
        </div>
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

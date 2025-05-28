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

export default function Brrike() {
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
      <section className="about-section relative grid w-full items-center justify-center bg-black max-sm:py-6 md:h-[450px] md:py-16">
        {/* Replaced video with Image component */}
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full w-full items-center max-xl:mt-2 max-xl:justify-center max-xl:text-center max-sm:justify-center lg:mt-0 lg:items-center">
            <div className="flex w-full flex-col items-center justify-center">
              <p className="headfont  text-center text-6xl font-semibold text-[#FFFFFF] max-xl:text-3xl max-lg:mt-5 max-lg:text-4xl">
                About Us
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="vision"
        className="paddings relative flex w-full  flex-col items-center justify-between gap-16 bg-[#FFFFFF] md:py-24"
      >
        <div className="headfont flex w-full flex-col  items-center justify-center gap-10 text-center">
          <div className="flex flex-col gap-6 ">
            <p className="text-5xl font-bold max-sm:text-3xl">Company Vision</p>
            <p className="md:w-[683px] ">
              To redefine mobility and automation through sustainable, intelligent, and accessible solutions—on roads,
              farms, and skies.
            </p>
          </div>
          <div className="flex w-full items-center justify-between max-sm:flex-col max-sm:gap-6 md:gap-10">
            <div className="flex w-full md:hidden">
              <img src="/susmo/about.svg" alt="" />
            </div>
            <div className="flex w-full flex-col max-sm:gap-6 md:gap-16">
              <div className="w-full max-sm:text-start md:text-end">
                <p className="text-[26px] font-bold">Purpose</p>
                <p>
                  To build efficient, purpose-driven mobility solutions that simplify cargo transport and enable
                  automated operations—especially in regions where traditional systems fall short.
                </p>
              </div>
              <div className="w-full max-sm:text-start md:text-end">
                <p className="text-[26px] font-bold">Aim</p>
                <p>
                  To drive the future of cargo movement and field automation through smart electric vehicles and
                  intelligent drones—engineered for India&lsquo;s evolving needs.
                </p>
              </div>
            </div>
            <div className="flex w-full max-sm:hidden">
              <img src="/susmo/about.svg" alt="" />
            </div>

            <div className="flex w-full flex-col max-sm:gap-6 md:gap-16">
              <div className="w-full text-start ">
                <p className="text-[26px] font-bold">Mission</p>
                <p>
                  To design, manufacture, and deliver electric cargo vehicles and drones powered by our patented
                  energy-saving motor technology—helping businesses, farmers, and institutions move goods and perform
                  precision tasks with greater speed, savings, and sustainability.
                </p>
              </div>
              <div className="w-full text-start ">
                <p className="text-[26px] font-bold">Vision</p>
                <p>
                  To become India’s most trusted DeepTech manufacturer for sustainable cargo and automation
                  systems—connecting roads and skies through intelligent, scalable technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="verticals"
        className="paddings headfont relative flex w-full  flex-col items-center  gap-6 bg-[#ffffff] md:py-24"
      >
        <p className="text-5xl font-semibold max-sm:text-2xl">Susmo now innovates across three verticals:</p>

        <div className="headfont flex w-full justify-between gap-6   max-sm:flex-col md:mt-6 ">
          <div className="flex w-full flex-col gap-4 rounded-3xl bg-[#F7F7F7] p-6 text-center">
            <img src="/susmo/about1.svg" alt="" />
            <p className="text-[26px] font-bold max-sm:text-2xl">e-Drives & Ground Mobility</p>
            <p>EV 2W/3W for urban & rural logistics Battery swapping and sustainable charging systems</p>
            <ButtonModule
              type="button"
              variant="ghost2"
              size="md"
              icon={<ArrowIcon />}
              iconPosition="end"
              className="mt-auto"
              onClick={() => handleExploreClick()}
            >
              Learn More
            </ButtonModule>
          </div>
          <div className="flex w-full flex-col gap-4 rounded-3xl bg-[#F7F7F7] p-6 text-center">
            <img src="/susmo/about2.svg" alt="" />
            <p className="text-[26px] font-bold max-sm:text-2xl">Agro-Mobility</p>
            <p>
              Smart agricultural drones for spraying, seeding, surveying AI-powered field analytics via drone vision
              Solar-powered agri-transport bots
            </p>
            <ButtonModule
              type="button"
              variant="ghost2"
              size="md"
              icon={<ArrowIcon />}
              iconPosition="end"
              className="mt-auto"
              onClick={() => handleExploreClick()}
            >
              Learn More
            </ButtonModule>
          </div>
          <div className="flex w-full flex-col gap-4 rounded-3xl bg-[#F7F7F7] p-6 text-center">
            <img src="/susmo/about2.svg" alt="" />
            <p className="text-[26px] font-bold max-sm:text-2xl">Aerial Automation</p>
            <p>
              Drones for smart village connectivity Delivery drones for last-mile logistics Disaster & emergency
              surveillance systems
            </p>
            <ButtonModule
              type="button"
              variant="ghost2"
              size="md"
              icon={<ArrowIcon />}
              iconPosition="end"
              className="mt-auto"
              onClick={() => handleExploreClick()}
            >
              Learn More
            </ButtonModule>
          </div>
        </div>
      </section>
      <section
        id="goals"
        className="paddings headfont relative flex w-full  flex-col items-center  gap-6 bg-[#F7F7F7] md:py-24"
      >
        <div className="headfont flex w-full justify-center gap-4 max-xl:flex-col md:items-center md:gap-10 ">
          <img src="/susmo/about4.svg" alt="" />
          <div>
            <p className="headfont text-5xl font-semibold text-[#000000]  max-xl:px-8 max-sm:mb-3 max-sm:text-start max-sm:text-2xl md:mb-10">
              Goals
            </p>
            <ul className="flex list-disc flex-col gap-3 px-5 max-xl:px-10">
              <li>
                To become a leading manufacturer of energy-efficient cargo vehicles and automation drones within 3
                years.
              </li>
              <li>To serve 100+ districts with last-mile cargo and aerial automation solutions by 2027.</li>
              <li>To scale the adoption of Susmo’s patented BLDC motor across multiple mobility platforms.</li>
              <li>
                To create measurable impact in logistics, agriculture, and infrastructure through cleaner and smarter
                operations.
              </li>
              <li>
                To evolve into a connected ecosystem enabling ground-air coordination and AI-driven automation by 2030.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="objectives"
        className="paddings headfont relative flex w-full  flex-col items-center  gap-6 bg-[#FFFFFF] md:py-24"
      >
        <div className="headfont  w-full  items-center   ">
          <p className="headfont text-5xl font-semibold  text-[#000000] max-sm:mb-3 max-sm:text-2xl md:mb-10">
            Our Objectives
          </p>
          <ul className="flex list-disc flex-col gap-3 px-5">
            <li>Launch commercial production of EV cargo vehicles and drones with patented tech by Q4 2025.</li>
            <li>Deploy in pilot clusters across rural and semi-urban India within the first 12 months.</li>
            <li>Achieve 30% energy efficiency gains compared to traditional alternatives.</li>
            <li>Expand manufacturing capacity through strategic partnerships by 2026.</li>
            <li>Introduce software integration for fleet and drone management in Phase 2 (2026–27).</li>
            <li>Enable platform capabilities for data, automation, and service offerings in future phases.</li>
          </ul>
        </div>
      </section>

      <section
        id="business-model"
        className="paddings headfont relative flex w-full  flex-col items-center justify-center  gap-6 bg-[#F7F7F7] md:py-24"
      >
        <div className="headfont flex w-full flex-col  justify-center gap-10 md:items-center  md:text-center ">
          <ul className="flex  flex-col gap-3 md:text-center">
            <p className="headfont text-5xl font-semibold  text-[#000000] max-sm:text-2xl md:mb-10">
              Our Business Model
            </p>
            <li className="font-semibold md:md:text-lg">
              Susmo operates as a DeepTech cargo mobility and automation company, with a vertically integrated
              manufacturing-led model:
            </li>
            <li className="font-medium text-[#000000CC] md:text-lg">
              Deploy in pilot clusters across rural and semi-urban India within the first 12 months.
            </li>
            <li className="font-medium text-[#000000CC] md:text-lg">
              Achieve 30% energy efficiency gains compared to traditional alternatives.
            </li>
            <li className="font-medium text-[#000000CC] md:text-lg">
              Expand manufacturing capacity through strategic partnerships by 2026.
            </li>
            <li className="font-medium text-[#000000CC] md:text-lg">
              Introduce software integration for fleet and drone management in Phase 2 (2026–27).
            </li>
            <li className="font-medium text-[#000000CC] md:text-lg">
              Enable platform capabilities for data, automation, and service offerings in future phases.
            </li>
          </ul>
          <div className="rounded-3xl border-2 border-dashed border-[#000000] bg-white p-6 max-sm:text-center">
            <p>“We engineer what moves, and we automate what matters.”</p>
          </div>
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

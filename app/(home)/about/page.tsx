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
import { FormInputModule } from "components/Button/InputeModule"
import NewNav from "components/Navbar/NewNav"
import { SubscriptionForm } from "components/SubscriptionForm"

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
      <section className="about-section relative grid w-full items-center justify-center bg-black max-sm:py-6 md:h-[450px] md:py-16">
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
                About Us
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="vision"
        className="paddings relative flex w-full flex-col items-center justify-between gap-16 bg-[#FFFFFF] md:py-24"
      >
        <motion.div
          className="headfont flex w-full flex-col items-center justify-center gap-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.div className="flex flex-col gap-6" variants={item}>
            <p className="text-5xl font-bold max-sm:text-3xl">Company Vision</p>
            <p className="md:w-[683px]">
              To redefine mobility and automation through sustainable, intelligent, and accessible solutions—on roads,
              farms, and skies.
            </p>
          </motion.div>
          <motion.div
            className="flex w-full items-center justify-between max-sm:flex-col max-sm:gap-6 md:gap-10"
            variants={container}
          >
            <motion.div className="flex w-full md:hidden" variants={item}>
              <img src="/susmo/about.svg" alt="" />
            </motion.div>
            <motion.div className="flex w-full flex-col max-sm:gap-6 md:gap-16" variants={item}>
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
            </motion.div>
            <motion.div className="flex w-full max-sm:hidden" variants={item}>
              <img src="/susmo/about.svg" alt="" />
            </motion.div>

            <motion.div className="flex w-full flex-col max-sm:gap-6 md:gap-16" variants={item}>
              <div className="w-full text-start">
                <p className="text-[26px] font-bold">Mission</p>
                <p>
                  To design, manufacture, and deliver electric cargo vehicles and drones powered by our patented
                  energy-saving motor technology—helping businesses, farmers, and institutions move goods and perform
                  precision tasks with greater speed, savings, and sustainability.
                </p>
              </div>
              <div className="w-full text-start">
                <p className="text-[26px] font-bold">Vision</p>
                <p>
                  To become India&lsquo;s most trusted DeepTech manufacturer for sustainable cargo and automation
                  systems—connecting roads and skies through intelligent, scalable technologies.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section
        id="verticals"
        className="paddings headfont relative flex w-full flex-col items-center gap-6 bg-[#ffffff] md:py-24"
      >
        <motion.p
          className="text-5xl font-semibold max-sm:text-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={item}
        >
          Susmo now innovates across three verticals:
        </motion.p>

        <motion.div
          className="headfont flex w-full justify-between gap-6 max-sm:flex-col md:mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.div className="flex w-full flex-col gap-4 rounded-3xl bg-[#F7F7F7] p-6 text-center" variants={item}>
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
          </motion.div>
          <motion.div className="flex w-full flex-col gap-4 rounded-3xl bg-[#F7F7F7] p-6 text-center" variants={item}>
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
          </motion.div>
          <motion.div className="flex w-full flex-col gap-4 rounded-3xl bg-[#F7F7F7] p-6 text-center" variants={item}>
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
          </motion.div>
        </motion.div>
      </section>

      <section
        id="goals"
        className="paddings headfont relative flex w-full flex-col items-center gap-6 bg-[#F7F7F7] md:py-24"
      >
        <motion.div
          className="headfont flex w-full justify-center gap-4 max-xl:flex-col md:items-center md:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.img src="/susmo/about4.svg" alt="" variants={item} />
          <motion.div variants={item}>
            <p className="headfont text-5xl font-semibold text-[#000000] max-xl:px-8 max-sm:mb-3 max-sm:text-start max-sm:text-2xl md:mb-10">
              Goals
            </p>
            <motion.ul className="flex list-disc flex-col gap-3 px-5 max-xl:px-10" variants={container}>
              <motion.li variants={item}>
                To become a leading manufacturer of energy-efficient cargo vehicles and automation drones within 3
                years.
              </motion.li>
              <motion.li variants={item}>
                To serve 100+ districts with last-mile cargo and aerial automation solutions by 2027.
              </motion.li>
              <motion.li variants={item}>
                To scale the adoption of Susmo&lsquo;s patented BLDC motor across multiple mobility platforms.
              </motion.li>
              <motion.li variants={item}>
                To create measurable impact in logistics, agriculture, and infrastructure through cleaner and smarter
                operations.
              </motion.li>
              <motion.li variants={item}>
                To evolve into a connected ecosystem enabling ground-air coordination and AI-driven automation by 2030.
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </section>

      <section
        id="objectives"
        className="paddings headfont relative flex w-full flex-col items-center gap-6 bg-[#FFFFFF] md:py-24"
      >
        <motion.div
          className="headfont w-full items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.p
            className="headfont text-5xl font-semibold text-[#000000] max-sm:mb-3 max-sm:text-2xl md:mb-10"
            variants={item}
          >
            Our Objectives
          </motion.p>
          <motion.ul className="flex list-disc flex-col gap-3 px-5" variants={container}>
            <motion.li variants={item}>
              Launch commercial production of EV cargo vehicles and drones with patented tech by Q4 2025.
            </motion.li>
            <motion.li variants={item}>
              Deploy in pilot clusters across rural and semi-urban India within the first 12 months.
            </motion.li>
            <motion.li variants={item}>
              Achieve 30% energy efficiency gains compared to traditional alternatives.
            </motion.li>
            <motion.li variants={item}>Expand manufacturing capacity through strategic partnerships by 2026.</motion.li>
            <motion.li variants={item}>
              Introduce software integration for fleet and drone management in Phase 2 (2026–27).
            </motion.li>
            <motion.li variants={item}>
              Enable platform capabilities for data, automation, and service offerings in future phases.
            </motion.li>
          </motion.ul>
        </motion.div>
      </section>

      <section
        id="business-model"
        className="paddings headfont relative flex w-full flex-col items-center justify-center gap-6 bg-[#F7F7F7] md:py-24"
      >
        <motion.div
          className="headfont flex w-full flex-col justify-center gap-10 md:items-center md:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.ul className="flex flex-col gap-3 md:text-center" variants={container}>
            <motion.p
              className="headfont text-5xl font-semibold text-[#000000] max-sm:text-2xl md:mb-10"
              variants={item}
            >
              Our Business Model
            </motion.p>
            <motion.li className="font-semibold md:text-lg" variants={item}>
              Susmo operates as a DeepTech cargo mobility and automation company, with a vertically integrated
              manufacturing-led model:
            </motion.li>
            <motion.li className="font-medium text-[#000000CC] md:text-lg" variants={item}>
              Deploy in pilot clusters across rural and semi-urban India within the first 12 months.
            </motion.li>
            <motion.li className="font-medium text-[#000000CC] md:text-lg" variants={item}>
              Achieve 30% energy efficiency gains compared to traditional alternatives.
            </motion.li>
            <motion.li className="font-medium text-[#000000CC] md:text-lg" variants={item}>
              Expand manufacturing capacity through strategic partnerships by 2026.
            </motion.li>
            <motion.li className="font-medium text-[#000000CC] md:text-lg" variants={item}>
              Introduce software integration for fleet and drone management in Phase 2 (2026–27).
            </motion.li>
            <motion.li className="font-medium text-[#000000CC] md:text-lg" variants={item}>
              Enable platform capabilities for data, automation, and service offerings in future phases.
            </motion.li>
          </motion.ul>
          <motion.div
            className="rounded-3xl border-2 border-dashed border-[#000000] bg-white p-6 max-sm:text-center"
            variants={item}
          >
            <p>&quot;We engineer what moves, and we automate what matters.&quot;</p>
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
          <SubscriptionForm
            title="Never miss an update, offers and invites."
            termsText="By submitting, I agree to receive future communications from Susmo and I have read and agree to Susmo Terms and acknowledge the Data Privacy Notice."
            apiKey="Vo0OnvZwZkP9x0JMOLMb"
            listId="TXL3t7638tGtBAtquo6OJf2A"
            variants={item}
            successMessage="You're subscribed! Welcome to our community."
            errorMessage="Oops! Something went wrong. Please try again later."
          />
        </motion.div>
      </section>

      <MainFooter />
    </section>
  )
}

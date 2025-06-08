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
import { FormModule } from "components/Button/FormModule"
import { DropdownPopoverModule } from "components/Button/DropdownModule"
import NewNav from "components/Navbar/NewNav"
import { EnquiryForm } from "components/EnquiryForm"

export default function Web() {
  const router = useRouter()
  const [searchText, setSearchText] = useState("")

  const handleProductClick = () => {
    router.push("/our-product")
  }

  const types = [
    { value: "Drives", label: "Drives" },
    { value: "Drones", label: "Drones" },
    { value: "Brrikes", label: "Brrikes" },
  ]

  useEffect(() => {
    // Filter categories based on search text
  }, [searchText])

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

  return (
    <section className="bg-black">
      <Navbar />
      <NewNav />
      <section className="about-section relative grid w-full items-center justify-center bg-black  max-sm:h-[253px] md:h-[450px] md:py-16">
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
          <div className="flex h-full w-full items-center max-xl:justify-center max-xl:text-center max-sm:justify-center lg:mt-0 lg:items-center">
            <div className="flex w-full flex-col items-center justify-center">
              <p className="headfont text-center  text-6xl font-semibold text-[#FFFFFF] max-xl:text-3xl max-lg:text-4xl  max-sm:text-3xl">
                Enquiry
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="headfont relative flex w-full flex-col items-center bg-[#EEEEEE] max-sm:px-4 md:pb-10">
        <EnquiryForm
          title="Enquiry Form"
          types={types}
          apiKey="Vo0OnvZwZkP9x0JMOLMb"
          listId="TXL3t7638tGtBAtquo6OJf2A"
          variants={item}
          successMessage="Thank you for your enquiry! We'll get back to you soon."
          errorMessage="Submission failed. Please try again."
        />
      </section>

      <section id="about" className="about-section relative w-full items-center justify-between bg-black md:py-16">
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
          className="paddings relative z-10 flex h-full flex-col justify-between max-sm:px-3 md:pb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full w-full  max-xl:mt-2 max-xl:justify-center max-xl:text-center max-sm:justify-center lg:mt-0">
            <div className="flex w-full flex-col  justify-between">
              <div className="flex w-full items-center justify-center max-sm:mb-10 md:mb-20">
                <p className="headfont text-3xl font-semibold text-white max-sm:text-2xl md:w-[392px]">
                  Powering Smart Mobility — On Roads and Above
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <MainFooter />
    </section>
  )
}

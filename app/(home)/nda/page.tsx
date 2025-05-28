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

export default function Nda() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [searchText, setSearchText] = useState("")
  const [type, setType] = useState("")

  const handleProductClick = () => {
    router.push("/our-product")
  }

  const types = [
    { value: "Drives", label: "Drives" },
    { value: "Drones", label: "Drones" },
    { value: "Brrikes", label: "Brrikes" },
  ]

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
      <section className="about-section relative grid w-full items-center justify-center bg-black  max-sm:h-[253px] md:h-[450px] md:py-16">
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
          <div className="flex h-full w-full items-center max-xl:justify-center max-xl:text-center max-sm:justify-center lg:mt-0 lg:items-center">
            <div className="flex w-full flex-col items-center justify-center">
              <p className="headfont text-center  text-6xl font-semibold text-[#FFFFFF] max-xl:text-3xl max-lg:text-4xl  max-sm:text-3xl">
                Supplier NDA
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className=" relative flex w-full flex-col items-center bg-[#EEEEEE] max-sm:px-4 md:pb-10">
        <div className="relative z-20 -mt-24 mb-4 flex  w-full flex-col gap-6 rounded-2xl bg-white max-sm:p-6 md:w-[766px] md:p-8">
          <div className="grid  gap-6 md:grid-cols-2">
            <FormModule
              label="Full Name"
              type="name"
              placeholder="Enter Name"
              value={username}
              onChange={handleUsernameChange}
              className="w-full"
            />
            <FormModule
              label="Email"
              type="name"
              placeholder="Enter Email"
              value={username}
              onChange={handleUsernameChange}
              className="w-full"
            />
            <FormModule
              label="Phone Number"
              type="name"
              placeholder="+91"
              value={username}
              onChange={handleUsernameChange}
              className="w-full"
            />
            <FormModule
              label="Company Type"
              type="name"
              placeholder="Enter Company Type"
              value={username}
              onChange={handleUsernameChange}
              className="w-full"
            />
            <FormModule
              label="State"
              type="name"
              placeholder="Enter State"
              value={username}
              onChange={handleUsernameChange}
              className="w-full"
            />

            <FormModule
              label="Country"
              type="name"
              placeholder="Enter Country"
              value={username}
              onChange={handleUsernameChange}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="refundNotes" className="text-[#6C7278]">
              Purpose
            </label>
            <textarea
              id="refundNotes"
              className="focus:border-primary focus:ring-primary w-full rounded-md border border-[#EDF1F3] p-3 transition-colors duration-200 hover:border-[#47CD63] focus:outline-none focus:ring-2 focus:ring-[#47CD63]"
              rows={2}
              placeholder="Enter Purpose"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="refundNotes" className="text-[#6C7278]">
              Address
            </label>
            <textarea
              id="refundNotes"
              className="focus:border-primary focus:ring-primary w-full rounded-md border border-[#EDF1F3] p-3 transition-colors duration-200 hover:border-[#47CD63] focus:outline-none focus:ring-2 focus:ring-[#47CD63]"
              rows={2}
              placeholder="Enter Address Here"
            />
          </div>
          <ButtonModule
            type="button"
            variant="primary"
            size="md"
            icon={<ArrowIcon />}
            iconPosition="end"
            onClick={handleProductClick}
            className="w-[255px]"
          >
            Submit
          </ButtonModule>
        </div>
      </section>

      <section id="about" className="about-section relative w-full items-center justify-between bg-black md:py-16">
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
          <div className="headfont text-medium flex items-center justify-between rounded-3xl bg-black text-5xl text-[#ffffff] max-sm:flex-col max-sm:p-4 max-sm:text-2xl md:h-[351px] md:px-[100px]">
            <p className="md:w-[660px]  md:leading-[60px]">Never miss an update, offers and invites.</p>
            <div className="flex flex-col  items-end justify-end md:gap-4">
              <FormInputModule
                label=""
                type="name"
                placeholder="email"
                value={username}
                onChange={handleUsernameChange}
                className="mb-3 max-sm:mt-6 max-sm:w-full md:w-[400px]"
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
              <p className="text-end text-sm  text-[#FFFFFFCC] max-sm:my-6 md:w-[400px]">
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

"use client"

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
          className="paddings relative z-10 max-sm:px-3"
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
                Brrike
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="paddings relative flex w-full flex-col items-center justify-between bg-[#FFFFFF] max-sm:gap-6 md:gap-16 md:py-24">
        <motion.img
          src="/susmo/brrike1.svg"
          alt=""
          className="w-full rounded-2xl object-cover max-sm:h-[349px] md:h-[658px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        />

        <motion.div
          className="headfont w-full text-center max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 md:flex md:items-center md:justify-center md:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.div className="flex flex-col md:gap-6 md:border-r md:pr-10" variants={item}>
            <p className="text-2xl max-xl:text-base max-sm:text-sm">Est. range¹</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">100 mi</p>
          </motion.div>
          <motion.div className="flex flex-col md:gap-6 md:border-r md:pr-10" variants={item}>
            <p className="text-2xl max-xl:text-base max-sm:text-sm">0-40 in under¹</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">06 s</p>
          </motion.div>
          <motion.div className="flex flex-col md:gap-6 md:border-r md:pr-10" variants={item}>
            <p className="text-2xl max-xl:text-base max-sm:text-sm">Towing up to¹</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">200 kg</p>
          </motion.div>
          <motion.div className="flex flex-col md:gap-6" variants={item}>
            <p className="text-2xl max-xl:text-base max-sm:text-sm">Payload</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">150 kg</p>
          </motion.div>
        </motion.div>
      </section>

      <section className="about-section relative grid w-full justify-center bg-black max-sm:h-[700px] md:h-[450px] md:items-center">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Image
            src="/susmo/brrike2.svg"
            alt="Background"
            fill
            className="object-cover opacity-80 max-sm:hidden"
            quality={100}
            priority
          />
          <Image
            src="/susmo/new.png"
            alt="Background"
            fill
            className="object-cover opacity-80 md:hidden"
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
          <div className="flex h-full w-full max-xl:mt-2 md:items-center lg:mt-0">
            <div className="md:tems-center flex w-full flex-col">
              <motion.p
                className="headfont text-center text-2xl font-medium text-[#FFFFFF] max-lg:mt-5 max-sm:text-base md:max-w-[970px] md:leading-[48px]"
                variants={item}
              >
                Actual vehicle capability will depend on selected options and load. Real-world range of 100 mi available
                on 2025 3x3 with Max Battery which offers smooth 0–40 km/h in as quick as 6 seconds with 22” wheels.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="gallery"
        className="paddings headfont relative flex w-full flex-col bg-[#DBDBDB] md:items-center md:gap-6 md:py-24"
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
          <motion.p className="mb-4 text-xl md:w-[760px] md:text-center" variants={item}>
            Rural routes mastered. 2025 Brrike 3x3 uses dual front motors and a rear motor for superior grip, smooth
            towing, and extended range up to 100 miles.
          </motion.p>
          <motion.div
            className="headfont hide-scrollbar flex w-full items-center justify-start gap-6 overflow-x-auto max-sm:mt-4 md:px-4"
            variants={item}
          >
            <img src="/susmo/brrike3.svg" alt="" />
            <img src="/susmo/brrike4.svg" alt="" />
            <img src="/susmo/brrike5.svg" alt="" />
            <img src="/susmo/brrike6.svg" alt="" />
          </motion.div>
        </motion.div>
      </section>

      <section
        id="dimensions"
        className="paddings headfont relative flex w-full flex-col items-center gap-6 bg-[#ffffff] md:py-24"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="flex flex-col items-center gap-6"
        >
          <motion.div className="flex flex-col items-center" variants={item}>
            <p className="headfont px-5 text-center text-6xl font-semibold text-[#000000] max-sm:text-2xl">
              Dimensions
            </p>
            <div className="h-1 w-20 bg-[#F8350E]"></div>
          </motion.div>
          <motion.div className="headfont flex w-full items-center justify-center gap-6" variants={item}>
            <img src="/susmo/dimension1.svg" alt="" className="max-sm:hidden" />
            <img src="/susmo/brrike7.svg" alt="" className="md:hidden" />
          </motion.div>
          <motion.div
            className="flex flex-col gap-5 rounded-3xl border border-[#00000033] max-sm:w-full max-sm:p-4 max-sm:text-sm md:w-[751px] md:px-16 md:py-8"
            variants={item}
          >
            <motion.div className="flex w-full items-center justify-between" variants={item}>
              <p>A. Max height (with antenna)</p>
              <p className="font-bold">43.3 in</p>
            </motion.div>
            <motion.div className="flex w-full items-center justify-between" variants={item}>
              <p>B. Width (side mirrors folded)</p>
              <p className="font-bold">27.5 in</p>
            </motion.div>
            <motion.div className="flex w-full items-center justify-between" variants={item}>
              <p>C. Wheelbase</p>
              <p className="font-bold">51.2 in</p>
            </motion.div>
            <motion.div className="flex w-full items-center justify-between" variants={item}>
              <p>D. Length</p>
              <p className="font-bold">68.9 in</p>
            </motion.div>
            <motion.div className="flex w-full items-center justify-between" variants={item}>
              <p>E. Approach angle</p>
              <p className="font-bold">28°</p>
            </motion.div>
            <motion.div className="flex w-full items-center justify-between" variants={item}>
              <p>F. Departure angle</p>
              <p className="font-bold">26°</p>
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

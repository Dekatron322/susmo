"use client"
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
          className="paddings relative z-10  max-sm:px-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full w-full items-center max-xl:mt-2 max-xl:justify-center max-xl:text-center max-sm:justify-center lg:mt-0 lg:items-center">
            <div className="flex w-full flex-col items-center justify-center">
              <p className="headfont  text-center text-6xl font-semibold text-[#FFFFFF] max-xl:text-3xl max-lg:mt-5 max-lg:text-4xl">
                Brrike
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="paddings relative flex w-full  flex-col items-center justify-between bg-[#FFFFFF] max-sm:gap-6 md:gap-16 md:py-24">
        <img
          src="/susmo/brrike1.svg"
          alt=""
          className="w-full  rounded-2xl object-cover max-sm:h-[349px] md:h-[658px]"
        />
        <div className="headfont w-full text-center max-sm:grid max-sm:grid-cols-2   max-sm:gap-4 md:flex md:items-center md:justify-center md:gap-10">
          <div className="flex flex-col md:gap-6 md:border-r md:pr-10">
            <p className="text-2xl max-xl:text-base max-sm:text-sm">Est. range¹</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">100 mi</p>
          </div>
          <div className="flex flex-col md:gap-6 md:border-r md:pr-10">
            <p className="text-2xl max-xl:text-base max-sm:text-sm">0-40 in under¹</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">06 s</p>
          </div>
          <div className="flex flex-col md:gap-6 md:border-r md:pr-10">
            <p className="text-2xl max-xl:text-base max-sm:text-sm">Towing up to¹</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">200 kg</p>
          </div>
          <div className="flex flex-col md:gap-6 ">
            <p className="text-2xl max-xl:text-base max-sm:text-sm">Payload</p>
            <p className="text-5xl font-bold max-xl:text-2xl max-sm:text-2xl">150 kg</p>
          </div>
        </div>
      </section>

      <section className="about-section relative grid w-full justify-center bg-black max-sm:h-[700px] md:h-[450px]  md:items-center">
        {/* Replaced video with Image component */}
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full w-full max-xl:mt-2 md:items-center    lg:mt-0 ">
            <div className="md:tems-center flex w-full flex-col ">
              <p className="headfont text-center  text-2xl font-medium text-[#FFFFFF] max-lg:mt-5  max-sm:text-base  md:max-w-[970px] md:leading-[48px]">
                Actual vehicle capability will depend on selected options and load. Real-world range of 100 mi available
                on 2025 3x3 with Max Battery which offers smooth 0–40 km/h in as quick as 6 seconds with 22” wheels.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      <section
        id="gallery"
        className="paddings headfont relative flex w-full  flex-col bg-[#DBDBDB]  md:items-center md:gap-6 md:py-24"
      >
        <p className="text-6xl font-semibold max-sm:text-3xl">
          Built for <br className="md:hidden" /> Performance
        </p>
        <p className="mb-4 text-xl md:w-[760px] md:text-center">
          Rural routes mastered. 2025 Brrike 3x3 uses dual front motors and a rear motor for superior grip, smooth
          towing, and extended range up to 100 miles.
        </p>
        <div className="headfont hide-scrollbar flex w-full items-center justify-start gap-6 overflow-x-auto max-sm:mt-4 md:px-4">
          <img src="/susmo/brrike3.svg" alt="" />
          <img src="/susmo/brrike4.svg" alt="" />
          <img src="/susmo/brrike5.svg" alt="" />
          <img src="/susmo/brrike6.svg" alt="" />
        </div>
      </section>
      <section
        id="dimensions"
        className="paddings headfont relative flex w-full  flex-col items-center  gap-6 bg-[#ffffff] md:py-24"
      >
        <div className="flex flex-col items-center">
          <p className="headfont px-5 text-center text-6xl font-semibold text-[#000000] max-sm:text-2xl">Dimensions</p>
          <div className="h-1 w-20 bg-[#F8350E]"></div>
        </div>

        <div className="headfont flex w-full  items-center justify-center gap-6 ">
          <img src="/susmo/dimension1.svg" alt="" className="max-sm:hidden" />
          <img src="/susmo/brrike7.svg" alt="" className="md:hidden" />
        </div>
        <div className="flex flex-col gap-5 rounded-3xl border border-[#00000033]  max-sm:w-full max-sm:p-4 max-sm:text-sm md:w-[751px] md:px-16 md:py-8">
          <div className="flex w-full items-center justify-between">
            <p>A. Max height (with antenna)</p>
            <p className="font-bold"> 43.3 in</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p>B. Width (side mirrors folded)</p>
            <p className="font-bold"> 27.5 in </p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p>C. Wheelbase</p>
            <p className="font-bold"> 51.2 in </p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p>D. Length</p>
            <p className="font-bold"> 68.9 in </p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p>E. Approach angle</p>
            <p className="font-bold"> 28° </p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p>F. Departure angle</p>
            <p className="font-bold"> 26° </p>
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

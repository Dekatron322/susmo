"use client"

import Image from "next/image"
import Link from "next/link"
import FacebookIcon from "public/susmo/FacebookLogo"
import LinkedInIcon from "public/susmo/LinkedinLogo"
import YoutubeIcon from "public/susmo/YoutubeLogo"
import React, { useState } from "react"

const MainFooter = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ text: "", type: "" })

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setMessage({ text: "Please enter your email", type: "error" })
      return
    }

    setLoading(true)
    setMessage({ text: "", type: "" })

    try {
      const response = await fetch("https://api.smarthavensystems.com/custom-user/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ text: "Subscription successful! Thank you.", type: "success" })
        setEmail("")
      } else {
        setMessage({ text: "Subscription failed. Please try again.", type: "error" })
      }
    } catch (error) {
      setMessage({ text: "An error occurred. Please try again later.", type: "error" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section id="contact" className="paddings w-full  bg-[#000000]">
        <Link href="/">
          <Image src="/susmo/logo.svg" width={173} height={54} className="max-sm:hidden" alt="dekalo" />
          <Image src="/susmo/logo.svg" width={122} height={43} alt="dekalo" className="md:hidden" />
        </Link>
        <div className="mt-8 flex w-full justify-between max-sm:flex-col-reverse max-sm:gap-4">
          <div className="flex gap-6 text-[#FFFFFF] max-sm:flex-col max-sm:text-sm md:items-center ">
            <p className="text-sm text-[#FFFFFF99] md:hidden">Company</p>
            <Link href="/why-susmo" className="hover-effect">
              Motors
            </Link>
            <Link href="/brrike" className="hover-effect">
              Brrike
            </Link>
            <Link href="/drone" className="hover-effect">
              Drone
            </Link>

            <Link href="about" className="hover-effect">
              About Us
            </Link>
            <Link href="solutions" className="hover-effect">
              Solutions
            </Link>
            <Link href="miscellaneous" className="hover-effect">
              Miscellaneous
            </Link>
          </div>
          <div className="flex items-center gap-6 text-[#FFFFFF] max-sm:mb-4">
            <div className="flex rounded-full border border-[#FFFFFF33] p-2">
              <LinkedInIcon className="max-sm:h-5 max-sm:w-5" />
            </div>
            <div className="flex rounded-full border border-[#FFFFFF33] p-2">
              <FacebookIcon className="max-sm:h-5 max-sm:w-5" />
            </div>
            <div className="flex rounded-full border border-[#FFFFFF33] p-2">
              <YoutubeIcon className="max-sm:h-5 max-sm:w-5" />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 text-sm text-[#FFFFFF] md:hidden">
          <p className="text-sm text-[#FFFFFF99]">Legals</p>
          <Link href="terms-of-service" className="hover-effect">
            Terms
          </Link>
          <Link href="privacy-policy" className="hover-effect">
            Privacy
          </Link>
          <Link href="cookie-policy" className="hover-effect">
            Cookies
          </Link>
        </div>
        <div className="flex w-full border-t border-[#FFFFFF26] pt-4 max-sm:mt-10 max-sm:justify-center md:mt-20 md:justify-between">
          <div className="flex w-full items-center gap-6 text-sm text-[#FFFFFF] max-sm:text-center">
            <p className="w-full max-sm:text-center">© 2025 Susmo. All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-[#FFFFFF] max-sm:hidden">
            <Link href="terms-of-service" className="hover-effect">
              Terms
            </Link>
            <Link href="privacy-policy" className="hover-effect">
              Privacy
            </Link>
            <Link href="cookie-policy" className="hover-effect">
              Cookies
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainFooter

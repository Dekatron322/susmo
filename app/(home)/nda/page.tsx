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
import { SubscriptionForm } from "components/SubscriptionForm"
import { toast } from "sonner"

export default function Nda() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyType: "",
    state: "",
    country: "",
    purpose: "",
    address: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate required fields
    if (!formData.email || !formData.fullName || !formData.purpose || !formData.address) {
      toast.error("Please fill in all required fields", {
        position: "top-center",
        duration: 5000,
      })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("https://nda-4kju.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
        }),
      })

      if (response.ok) {
        toast.success("NDA submitted successfully! We'll be in touch soon.", {
          position: "top-center",
          duration: 5000,
        })
        // Reset form after successful submission
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          companyType: "",
          state: "",
          country: "",
          purpose: "",
          address: "",
        })
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast.error("Failed to submit NDA. Please try again later.", {
        position: "top-center",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
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
                Supplier NDA
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className=" relative flex w-full flex-col items-center bg-[#EEEEEE] max-sm:px-4 md:pb-10">
        <form
          onSubmit={handleSubmit}
          className="relative z-20 -mt-24 mb-4 flex  w-full flex-col gap-6 rounded-2xl bg-white max-sm:p-6 md:w-[766px] md:p-8"
        >
          <div className="grid  gap-6 md:grid-cols-2">
            <FormModule
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Enter Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full"
            />
            <FormModule
              label="Email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full"
            />
            <FormModule
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              placeholder="+91"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full"
            />
            <FormModule
              label="Company Type"
              name="companyType"
              type="text"
              placeholder="Enter Company Type"
              value={formData.companyType}
              onChange={handleInputChange}
              className="w-full"
            />
            <FormModule
              label="State"
              name="state"
              type="text"
              placeholder="Enter State"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full"
            />
            <FormModule
              label="Country"
              name="country"
              type="text"
              placeholder="Enter Country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="purpose" className="text-[#6C7278]">
              Purpose <span className="text-red-500">*</span>
            </label>
            <textarea
              id="purpose"
              name="purpose"
              className="focus:border-primary focus:ring-primary w-full rounded-md border border-[#EDF1F3] p-3 transition-colors duration-200 hover:border-[#47CD63] focus:outline-none focus:ring-2 focus:ring-[#47CD63]"
              rows={2}
              placeholder="Enter Purpose"
              value={formData.purpose}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-[#6C7278]">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              id="address"
              name="address"
              className="focus:border-primary focus:ring-primary w-full rounded-md border border-[#EDF1F3] p-3 transition-colors duration-200 hover:border-[#47CD63] focus:outline-none focus:ring-2 focus:ring-[#47CD63]"
              rows={2}
              placeholder="Enter Address Here"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <ButtonModule
            type="submit"
            variant="primary"
            size="md"
            icon={<ArrowIcon />}
            iconPosition="end"
            disabled={isSubmitting}
            className="w-[255px]"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </ButtonModule>
        </form>
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

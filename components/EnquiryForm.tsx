"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ButtonModule } from "./Button/Button"
import { FormInputModule } from "./Button/InputeModule"
import ArrowIcon from "../public/susmo/ArrowUpRight"
import { toast } from "sonner"
import { DropdownPopoverModule } from "./Button/DropdownModule"
import { FormModule } from "./Button/FormModule"

interface EnquiryFormProps {
  title: string
  variants?: any
  className?: string
  inputClassName?: string
  buttonClassName?: string
  successMessage?: string
  errorMessage?: string
  types: Array<{ value: string; label: string }>
  apiKey: string
  listId: string
}

export const EnquiryForm = ({
  title,
  variants,
  className = "",
  inputClassName = "",
  buttonClassName = "",
  successMessage = "Thank you for your enquiry! We'll get back to you soon.",
  errorMessage = "Submission failed. Please try again.",
  types,
  apiKey,
  listId,
}: EnquiryFormProps) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [type, setType] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async () => {
    if (!email || !firstName || !lastName || !message || !type) {
      setSubmissionStatus("error")
      toast.error("Please fill all required fields")
      return
    }

    setIsSubmitting(true)
    setSubmissionStatus("idle")

    const formData = new URLSearchParams()
    formData.append("api_key", apiKey)
    formData.append("list", listId)
    formData.append("name", `${firstName} ${lastName}`)
    formData.append("email", email)
    formData.append("message", message)
    formData.append("boolean", "true")

    try {
      const response = await fetch("https://sendy-admin.smarthavensystems.com/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
        mode: "cors",
        credentials: "omit",
      })

      const result = await response.text()

      if (result === "1") {
        setSubmissionStatus("success")
        setFirstName("")
        setLastName("")
        setEmail("")
        setMessage("")
        setType("")
        toast.success(successMessage, {
          position: "top-center",
          duration: 5000,
        })
      } else {
        setSubmissionStatus("error")
        toast.error(errorMessage, {
          position: "top-center",
          duration: 5000,
        })
        console.error("Submission failed:", result)
      }
    } catch (error) {
      setSubmissionStatus("error")
      toast.error("Network error. Please check your connection and try again.", {
        position: "top-center",
        duration: 5000,
      })
      console.error("Error submitting enquiry:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      className={`headfont relative z-20 -mt-24 mb-4 flex w-full flex-col rounded-2xl bg-white max-xl:gap-4 max-sm:p-6 md:w-[766px] md:p-8 xl:gap-6 ${className}`}
      variants={variants}
    >
      <motion.p className="headfont text-center text-6xl font-semibold text-[#FFFFFF] max-xl:text-3xl max-lg:text-4xl max-sm:text-3xl">
        {title}
      </motion.p>

      <motion.div className="flex flex-col gap-6" variants={variants}>
        <DropdownPopoverModule
          label="Purpose of Enquiry"
          options={types}
          placeholder="Select Category"
          value={type}
          onChange={setType}
          className="w-full"
        />

        <div className="gap-10 xl:flex">
          <FormModule
            label="First Name"
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`w-full ${inputClassName}`}
          />
          <FormModule
            label="Last Name"
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={`w-full ${inputClassName}`}
          />
        </div>

        <FormModule
          label="Email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full ${inputClassName}`}
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-[#6C7278]">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="focus:border-primary focus:ring-primary w-full rounded-md border border-[#00000033] p-3 transition-colors duration-200 hover:border-[#47CD63] focus:outline-none focus:ring-2 focus:ring-[#47CD63]"
            rows={4}
            placeholder="Type Your Message.."
          />
        </div>

        <ButtonModule
          type="button"
          variant="primary"
          size="md"
          icon={<ArrowIcon />}
          iconPosition="end"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`md:w-[255px] ${buttonClassName}`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </ButtonModule>
      </motion.div>
    </motion.div>
  )
}

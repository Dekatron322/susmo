"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ButtonModule } from "./Button/Button"
import { FormInputModule } from "./Button/InputeModule"
import ArrowIcon from "../public/susmo/ArrowUpRight"
import { toast } from "sonner"

interface SubscriptionFormProps {
  title: string
  termsText: string
  apiKey: string
  listId: string
  variants?: any
  className?: string
  inputClassName?: string
  buttonClassName?: string
  successMessage?: string
  errorMessage?: string
}

export const SubscriptionForm = ({
  title,
  termsText,
  apiKey,
  listId,
  variants,
  className = "",
  inputClassName = "",
  buttonClassName = "",
  successMessage = "Thank you for subscribing!",
  errorMessage = "Subscription failed. Please try again.",
}: SubscriptionFormProps) => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState<"idle" | "success" | "error">("idle")

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setSubscriptionStatus("idle")
  }

  const handleSubscribe = async () => {
    if (!email) {
      setSubscriptionStatus("error")
      toast.error("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setSubscriptionStatus("idle")

    const formData = new URLSearchParams()
    formData.append("api_key", apiKey)
    formData.append("list", listId)
    formData.append("email", email)
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
        setSubscriptionStatus("success")
        setEmail("")
        toast.success(successMessage, {
          position: "top-center",
          duration: 5000,
        })
      } else {
        setSubscriptionStatus("error")
        toast.error(errorMessage, {
          position: "top-center",
          duration: 5000,
        })
        console.error("Subscription failed:", result)
      }
    } catch (error) {
      setSubscriptionStatus("error")
      toast.error("Network error. Please check your connection and try again.", {
        position: "top-center",
        duration: 5000,
      })
      console.error("Error submitting subscription:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      className={`headfont text-medium flex justify-between rounded-3xl bg-black text-5xl text-[#ffffff] max-xl:flex-col max-xl:p-8 max-xl:text-2xl max-sm:p-4 xl:h-[351px] xl:items-center xl:px-[100px] ${className}`}
      variants={variants}
    >
      <motion.p className="md:leading-[60px] xl:w-[660px]" variants={variants}>
        {title}
      </motion.p>
      <motion.div className="flex flex-col items-end justify-end md:gap-4" variants={variants}>
        <FormInputModule
          label=""
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className={`mb-3 max-xl:mt-6 max-xl:w-full md:w-[400px] ${inputClassName}`}
        />
        <ButtonModule
          type="button"
          variant="primaryOutline"
          size="md"
          icon={<ArrowIcon />}
          iconPosition="end"
          onClick={handleSubscribe}
          disabled={isSubmitting}
          className={buttonClassName}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </ButtonModule>
        <p className="text-end text-sm text-[#FFFFFFCC] max-xl:my-6 md:w-[400px]">{termsText}</p>
      </motion.div>
    </motion.div>
  )
}

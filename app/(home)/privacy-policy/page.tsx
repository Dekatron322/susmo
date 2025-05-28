"use client"
import Image from "next/image"
import Navbar from "components/Navbar/Navbar"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import MainFooter from "components/Footer/MainFooter"
import { useRouter } from "next/navigation"
import { ButtonModule } from "components/Button/Button"
import ArrowIcon from "public/susmo/ArrowUpRight"

import Link from "next/link"
import { FormInputModule } from "components/Button/InputeModule"
import NewNav from "components/Navbar/NewNav"

export default function PrivacyPolicy() {
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
          className=" relative z-10 pb-10 max-sm:px-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full w-full items-center max-xl:justify-center max-xl:text-center max-sm:justify-center lg:mt-0 lg:items-center">
            <div className="flex w-full flex-col items-center justify-center">
              <p className="headfont text-center  text-6xl font-semibold text-[#FFFFFF] max-xl:text-3xl max-lg:text-4xl  max-sm:text-3xl">
                Privacy Policy
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="headfont relative flex w-full flex-col items-center bg-[#EEEEEE] max-sm:px-4 md:pb-10">
        <div className="relative z-20 -mt-24 mb-4 flex flex-col gap-6 rounded-2xl bg-white max-sm:p-6 md:w-[766px] md:p-8">
          <div>
            <p className="text-sm font-bold">Effective Date: [Insert Date]</p>
            <p className="text-sm font-medium text-[#000000CC]">
              At Susmo, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your
              personal data when you visit our website and use our services. By accessing or using our website, you
              agree to the terms outlined in this policy.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">1. Information We Collect</p>
            <p className="text-sm font-medium text-[#000000CC]">
              We collect different types of information to provide and improve our services:
            </p>
            <p>Personal Information</p>
            <ul className="list-disc pl-8 text-sm">
              <li className="pb-1">
                What We Collect: When you visit or interact with our website, we may ask you to provide personal
                information, such as:
              </li>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">Name</li>
                <li className="pb-1">Email address</li>
                <li className="pb-1">Phone number</li>
                <li className="pb-1">Mailing address</li>
                <li className="pb-1">Job title and company information (if applicable)</li>
              </ul>
            </ul>
            <ul className="list-disc pl-8 text-sm">
              <li className="pb-1">How We Collect It:</li>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  Directly from you when you fill out contact forms, subscribe to our newsletter, or request services.
                </li>
                <li className="pb-1">
                  Automatically through cookies and other tracking technologies as you navigate our site.
                </li>
              </ul>
            </ul>
            <ul className="list-disc pl-8 text-sm">
              <li className="pb-1">Usage Data</li>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  We may collect information on how you access and use the website, including your IP address, browser
                  type, pages visited, and the time spent on those pages.
                </li>
              </ul>
            </ul>
            <ul className="list-disc pl-8 text-sm">
              <li className="pb-1">Cookies and Tracking Technologies</li>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  Our website uses cookies to enhance user experience, track usage, and store preferences. Cookies are
                  small data files that your browser places on your device. You can control cookie settings via your
                  browser preferences.
                </li>
              </ul>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold">2. How We Use Your Information</p>
            <p className="text-sm font-medium text-[#000000CC]">
              We use your information for various purposes, including:
            </p>
            <ul className="list-disc pl-8 text-sm">
              <li className="pb-1">
                To provide and improve our services (e.g., for client management, product offerings, or general site
                operation).
              </li>
              <li className="pb-1">
                To send you updates regarding our products, services, and news related to sustainable mobility, as well
                as promotional content if you&lsquo;ve opted into receiving them.
              </li>
              <li className="pb-1">To respond to inquiries and communicate with you more effectively. </li>
              <li className="pb-1">To analyze user behavior and improve the functionality of our website. </li>
              <li className="pb-1">To comply with legal obligations and enforce our terms of service. </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold">3. How We Protect Your Information</p>

            <p className="text-sm font-medium text-[#000000CC]">
              We take the security of your personal data seriously. We implement reasonable administrative, technical,
              and physical safeguards to protect your information from unauthorized access, alteration, disclosure, or
              destruction. However, no data transmission over the internet can be guaranteed to be 100% secure, so we
              cannot assure you of the absolute security of your data.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">4. Sharing Your Information</p>

            <p className="text-sm font-medium text-[#000000CC]">
              We do not sell or rent your personal information to third parties. However, we may share your information
              with trusted service providers to assist with services such as website hosting, data analysis, marketing,
              and customer service. These third parties are obligated to protect your information and only use it for
              the purpose of providing their services.
            </p>
            <p className="text-sm font-medium text-[#000000CC]">
              We may also disclose your information when required by law, to protect the safety of our users, or to
              comply with legal processes.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold">5. Your Data Protection Rights</p>
            <p className="text-sm font-medium text-[#000000CC]">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-8 text-sm">
              <li className="pb-1">Access: You can request access to the personal data we hold about you.</li>
              <li className="pb-1">
                Correction: You can request that we correct any inaccurate or incomplete information.
              </li>
              <li className="pb-1">
                Deletion: You can request the deletion of your personal data, subject to certain exceptions.{" "}
              </li>
              <li className="pb-1">
                Opt-out: You can opt out of receiving promotional communications from us by following the unsubscribe
                instructions in our emails.{" "}
              </li>
              <li className="pb-1">
                Data Portability: You can request a copy of your personal data in a structured, commonly used, and
                machine-readable format.{" "}
              </li>
            </ul>
            <p className="text-sm font-medium text-[#000000CC]">
              To exercise any of these rights, please contact us using the contact information below.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold">6. Third-Party Links</p>

            <p className="text-sm font-medium text-[#000000CC]">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of
              these external sites. We encourage you to read their privacy policies before sharing any personal
              information.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">7. Children’s Privacy</p>

            <p className="text-sm font-medium text-[#000000CC]">
              Our website is not intended for use by children under the age of 13. We do not knowingly collect personal
              data from children. If we learn that we have collected personal data from a child under 13, we will take
              steps to delete such information.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">8. Changes to This Privacy Policy</p>

            <p className="text-sm font-medium text-[#000000CC]">
              We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated
              effective date. We encourage you to review this Privacy Policy regularly to stay informed about how we are
              protecting your data.
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-bold">9. Contact Us</p>

            <p className="text-sm font-medium text-[#000000CC]">
              If you have any questions or concerns about these Terms of Service, please contact us at:
            </p>
            <Link className="text-sm" href="mailto:mail@sm-o-d.com">
              Email: mail@sm-o-d.com{" "}
            </Link>
            <Link className="text-sm" href="tel:+918850762306">
              Phone: +918850762306
            </Link>
            <p className="text-sm font-medium text-[#000000CC]">
              Address: OFFICE NO.626,
              <br /> PLOT NO.14B, GROHITAM BLDG, SECTOR-19, Vashi, Thane-400703,
              <br /> Maharashtra.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">Conclusion</p>

            <p className="text-sm font-medium text-[#000000CC]">
              By using our website and services, you acknowledge that you have read, understood, and agree to these
              Terms of Service. If you do not agree with these terms, please refrain from using the website.
            </p>
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

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
      <section
        id="about"
        className="about-section relative grid w-full items-center justify-center bg-black  max-sm:h-[253px] md:h-[450px] md:py-16"
      >
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
                Terms of Service
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
              Welcome to SUSMO AND OTHER DRIVES PRIVATE LIMITED By accessing or using our website
              (https://www.susmo.com) and its related services, you agree to comply with and be bound by the following
              terms and conditions. Please read these terms carefully before using our services
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">1. Acceptance of Terms</p>
            <p className="text-sm font-medium text-[#000000CC]">
              By accessing or using our website, you agree to be bound by these Terms of Service and any future
              amendments or updates. If you do not agree with these terms, please do not use our website or services.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">2. Use of Services</p>
            <p className="text-sm font-medium text-[#000000CC]">Eligibility</p>
            <p className="text-sm font-medium text-[#000000CC]">
              You must be at least 18 years old or the legal age of majority in your jurisdiction to use our services.
              By using our website, you represent that you are eligible to do so.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">Account Registration</p>

            <p className="text-sm font-medium text-[#000000CC]">
              To access certain features of the website or our services, you may be required to create an account. You
              agree to provide accurate, complete, and up-to-date information during the registration process and to
              keep your account details secure.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">Permitted Use</p>

            <p className="text-sm font-medium text-[#000000CC]">
              You may only use the website and services for lawful purposes. You agree not to:
            </p>
            <ul className="list-disc pl-8 text-sm">
              <li className="pb-1">
                Engage in activities that could disrupt or interfere with the operation of the website.
              </li>
              <li className="pb-1">Violate any local, state, or international laws or regulations.</li>
              <li>Infringe on the intellectual property rights of others.</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold">3. Intellectual Property</p>

            <p className="text-sm font-medium text-[#000000CC]">
              All content on the website, including logos, designs, text, images, videos, and other materials, are owned
              by Susmo or its licensors and are protected by copyright and other intellectual property laws. You may not
              use, reproduce, distribute, or modify any content from the website without express permission from Susmo.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">4. Privacy and Data Protection</p>

            <p className="text-sm font-medium text-[#000000CC]">
              Your use of our website is governed by our Privacy Policy, which outlines how we collect, use, and protect
              your personal data. By using the website, you consent to the collection and use of your information as
              described in our Privacy Policy.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">5. User Content</p>

            <p className="text-sm font-medium text-[#000000CC]">
              If you submit any content to the website (e.g., feedback, comments, or other materials), you grant Susmo a
              worldwide, non-exclusive, royalty-free license to use, display, and distribute such content in connection
              with our services. You represent and warrant that you have the right to submit the content and that it
              does not violate any third-party rights.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">6. Third-Party Links and Services</p>

            <p className="text-sm font-medium text-[#000000CC]">
              Our website may contain links to third-party websites or services. These links are provided for your
              convenience, and we do not endorse or assume responsibility for the content, privacy practices, or
              operations of these third-party sites. Use of these sites is at your own risk.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">7. Disclaimers and Limitation of Liability</p>
            <p className="text-sm font-medium text-[#000000CC]">No Warranty</p>

            <p className="text-sm font-medium text-[#000000CC]">
              The website and its content are provided “as is,” without any warranties, express or implied. Susmo does
              not guarantee that the website will be error-free, uninterrupted, or secure.
            </p>
            <p className="text-sm font-medium text-[#000000CC]">Limitation of Liability</p>
            <p className="text-sm font-medium text-[#000000CC]">
              To the fullest extent permitted by law, Susmo shall not be liable for any indirect, incidental, special,
              or consequential damages arising from your use of the website or services. This includes, but is not
              limited to, loss of profits, data, or business opportunities.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">8. Indemnification</p>

            <p className="text-sm font-medium text-[#000000CC]">
              You agree to indemnify, defend, and hold harmless Susmo, its affiliates, officers, employees, and agents
              from any claims, damages, losses, or expenses (including legal fees) arising from your use of the website
              or violation of these Terms of Service.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">9. Termination</p>

            <p className="text-sm font-medium text-[#000000CC]">
              We reserve the right to suspend or terminate your access to the website at any time, without notice, for
              any reason, including but not limited to violations of these Terms of Service. Upon termination, all
              provisions that by their nature should survive termination (including but not limited to ownership
              provisions, disclaimers, and limitations of liability) will remain in effect.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">10. Governing Law</p>

            <p className="text-sm font-medium text-[#000000CC]">
              These Terms of Service will be governed by and construed in accordance with the laws of [Your
              Jurisdiction], without regard to its conflict of law principles. Any legal action or proceeding under
              these Terms of Service will be brought exclusively in the courts of [Your Jurisdiction].
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">11. Changes to Terms of Service</p>

            <p className="text-sm font-medium text-[#000000CC]">
              Susmo reserves the right to modify or revise these Terms of Service at any time. Any changes will be
              posted on this page with an updated effective date. By continuing to use the website after such changes,
              you agree to be bound by the revised terms.
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold">12. Contact Us</p>

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

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

type PolicyTab = "disclaimer" | "shipping" | "refund"

export default function PrivacyPolicy() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [searchText, setSearchText] = useState("")
  const [type, setType] = useState("")
  const [activeTab, setActiveTab] = useState<PolicyTab>("disclaimer")

  const handleProductClick = () => {
    router.push("/our-product")
  }

  const types = [
    { value: "Drives", label: "Drives" },
    { value: "Drones", label: "Drones" },
    { value: "Brrikes", label: "Brrikes" },
  ]

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  useEffect(() => {
    // Filter categories based on search text
  }, [searchText])

  const renderPolicyContent = () => {
    switch (activeTab) {
      case "disclaimer":
        return (
          <div>
            <p className="mb-3 text-lg font-bold uppercase text-[#000000CC]">Disclaimer for susmo</p>
            <p className="text-sm font-bold">Effective Date: [Insert Date]</p>
            <p className="text-sm font-medium text-[#000000CC]">
              The information provided on this website (https://www.susmo.com) is for general informational purposes
              only. While we strive to ensure the accuracy and reliability of the content, Susmo makes no
              representations or warranties regarding the completeness, reliability, or accuracy of the information
              provided.
            </p>
            <p className="text-sm font-medium text-[#000000CC]">
              By accessing or using our website, you agree to comply with and be bound by this Disclaimer.
            </p>
            <div className="mt-2">
              <p className="text-sm font-bold">1. No Warranty</p>
              <p className="text-sm font-medium text-[#000000CC]">
                All content on the website is provided &quot;as is&quot;. Susmo does not make any representations or
                warranties regarding the completeness, reliability, or accuracy of the content, services, or features on
                our website.
              </p>

              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  No Guarantee of Accuracy: We make no guarantee that the information presented on the site will be
                  accurate, up-to-date, or error-free.
                </li>
                <li className="pb-1">
                  No Endorsement: The use of our website or its content does not imply endorsement or verification of
                  the information by Susmo.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">2. Limitation of Liability</p>
              <p className="text-sm font-medium text-[#000000CC]">
                To the fullest extent permitted by law, Susmo shall not be held liable for any direct, indirect,
                incidental, special, or consequential damages resulting from:
              </p>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">Your use or inability to use the website, services, or content.</li>
                <li className="pb-1">Any errors or omissions in the website content.</li>
                <li className="pb-1">
                  Any interruption, suspension, or discontinuation of services provided by the website.{" "}
                </li>
              </ul>
              <p>This includes, but is not limited to, loss of profits, data, or business opportunities.</p>
            </div>
            <div>
              <p className="text-sm font-bold">3. Third-Party Links and Services</p>
              <p className="text-sm font-medium text-[#000000CC]">
                Our website may contain links to third-party websites or services that are not owned or controlled by
                Susmo. We are not responsible for the content, privacy policies, or practices of these third-party
                sites. Susmo does not endorse or assume any responsibility for any third-party websites, products, or
                services.
                <br />
                By using third-party links, you acknowledge that you do so at your own risk.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold">4. Professional Advice</p>
              <p className="text-sm font-medium text-[#000000CC]">
                The content on this website is intended to provide general information and should not be construed as
                professional advice. If you require specific advice related to logistics, agriculture, sustainability,
                or any other area relevant to our business, you should consult a qualified professional in that field.
              </p>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  No Substitute for Professional Guidance: The content on this website is not intended to replace
                  professional advice, consultations, or services.
                </li>
                <li className="pb-1">
                  Reliance on Information: Any reliance you place on the information provided on this website is at your
                  own risk.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">5. Product and Service Availability</p>
              <p className="text-sm font-medium text-[#000000CC]">
                The products and services described on this website are available only in specific regions or locations,
                and some products or services may not be available in all regions. Susmo reserves the right to limit the
                sale of products or services to any person, geographic region, or jurisdiction.Depending on your
                location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  Product Availability: The availability of any product or service on the website is subject to change
                  without notice.
                </li>
                <li className="pb-1">
                  Service Modification: We reserve the right to modify or discontinue any service or feature at our sole
                  discretion.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">6. Changes to the Website and Services</p>
              <p className="text-sm font-medium text-[#000000CC]">
                Susmo reserves the right to modify or discontinue any aspect of the website, including its content,
                services, and features, at any time and without notice.
              </p>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  Service Interruptions: We are not responsible for any interruptions, errors, or defects in the
                  availability of the website or its services.
                </li>
                <li className="pb-1">
                  Updates and Changes: We may update or change the information on the website periodically, but we are
                  under no obligation to do so.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">7. Governing Law</p>
              <p className="text-sm font-medium text-[#000000CC]">
                This Disclaimer is governed by the laws of [Your Jurisdiction]. Any legal action arising out of or
                relating to this Disclaimer will be conducted in the courts of [Your Jurisdiction].
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold">8. Contact Us</p>
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
        )
      case "shipping":
        return (
          <div>
            <p className="mb-3 text-lg font-bold uppercase text-[#000000CC]">Shipping Policy for susmo</p>
            <p className="text-sm font-bold">Effective Date: [Insert Date]</p>
            <p className="text-sm font-medium text-[#000000CC]">
              The information provided on this website (https://www.susmo.com) is for general informational purposes
              only. While we strive to ensure the accuracy and reliability of the content, Susmo makes no
              representations or warranties regarding the completeness, reliability, or accuracy of the information
              provided.
            </p>
            <p className="text-sm font-medium text-[#000000CC]">
              By accessing or using our website, you agree to comply with and be bound by this Disclaimer.
            </p>
            <div className="mt-2">
              <p className="text-sm font-bold">1. No Warranty</p>
              <p className="text-sm font-medium text-[#000000CC]">
                All content on the website is provided &quot;as is&quot;. Susmo does not make any representations or
                warranties regarding the completeness, reliability, or accuracy of the content, services, or features on
                our website.
              </p>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  No Guarantee of Accuracy: We make no guarantee that the information presented on the site will be
                  accurate, up-to-date, or error-free.
                </li>
                <li className="pb-1">
                  No Endorsement: The use of our website or its content does not imply endorsement or verification of
                  the information by Susmo.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">2. Limitation of Liability</p>
              <p className="text-sm font-medium text-[#000000CC]">
                To the fullest extent permitted by law, Susmo shall not be held liable for any direct, indirect,
                incidental, special, or consequential damages resulting from:
              </p>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">Your use or inability to use the website, services, or content.</li>
                <li className="pb-1">Any errors or omissions in the website content.</li>
                <li className="pb-1">
                  Any interruption, suspension, or discontinuation of services provided by the website.
                </li>
              </ul>
              <p className="text-sm font-medium text-[#000000CC]">
                This includes, but is not limited to, loss of profits, data, or business opportunities.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold">3. Third-Party Links and Services</p>
              <p className="text-sm font-medium text-[#000000CC]">
                Our website may contain links to third-party websites or services that are not owned or controlled by
                Susmo. We are not responsible for the content, privacy policies, or practices of these third-party
                sites. Susmo does not endorse or assume any responsibility for any third-party websites, products, or
                services.
              </p>
              <p className="text-sm font-medium text-[#000000CC]">
                By using third-party links, you acknowledge that you do so at your own risk.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold">4. Professional Advice</p>
              <p className="text-sm font-medium text-[#000000CC]">
                The content on this website is intended to provide general information and should not be construed as
                professional advice. If you require specific advice related to logistics, agriculture, sustainability,
                or any other area relevant to our business, you should consult a qualified professional in that field.
              </p>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  No Substitute for Professional Guidance: The content on this website is not intended to replace
                  professional advice, consultations, or services.
                </li>
                <li className="pb-1">
                  Reliance on Information: Any reliance you place on the information provided on this website is at your
                  own risk.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">5. Product and Service Availability</p>
              <p className="text-sm font-medium text-[#000000CC]">
                The products and services described on this website are available only in specific regions or locations,
                and some products or services may not be available in all regions. Susmo reserves the right to limit the
                sale of products or services to any person, geographic region, or jurisdiction.
              </p>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  Product Availability: The availability of any product or service on the website is subject to change
                  without notice.
                </li>
                <li className="pb-1">
                  Service Modification: We reserve the right to modify or discontinue any service or feature at our sole
                  discretion.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">6. Changes to the Website and Services</p>
              <p className="text-sm font-medium text-[#000000CC]">
                Susmo reserves the right to modify or discontinue any aspect of the website, including its content,
                services, and features, at any time and without notice.
              </p>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  Service Interruptions: We are not responsible for any interruptions, errors, or defects in the
                  availability of the website or its services.
                </li>
                <li className="pb-1">
                  Updates and Changes: We may update or change the information on the website periodically, but we are
                  under no obligation to do so.
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold">7. Governing Law</p>
              <p className="text-sm font-medium text-[#000000CC]">
                This Disclaimer is governed by the laws of [Your Jurisdiction]. Any legal action arising out of or
                relating to this Disclaimer will be conducted in the courts of [Your Jurisdiction].
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold">8. Contact Us</p>
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
        )
      case "refund":
        return (
          <div>
            <p className="mb-3 text-lg font-bold uppercase text-[#000000CC]">REFUND policy</p>
            <p className="text-sm font-bold">Effective Date: [Insert Date]</p>
            <p className="text-sm font-medium text-[#000000CC]">
              At Susmo, we strive to ensure the highest quality products and services for our customers. If you are not
              completely satisfied with your purchase, we are here to help. This Refund Policy outlines the conditions
              under which refunds may be provided for products or services purchased from our website.
            </p>
            <div className="mt-2">
              <p className="text-sm font-bold">1. Refund Eligibility</p>
              <p className="text-sm font-medium text-[#000000CC]">
                Refunds may be requested for the following situations:
              </p>
              <p>Products</p>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  Defective or Damaged Products: If a product is received in a defective or damaged condition, please
                  contact us within [insert time frame, e.g., 30 days] from the date of delivery.
                </li>
                <li className="pb-1">
                  Incorrect Product: If you receive an item that is different from what you ordered, you may be eligible
                  for a refund or exchange.
                </li>
              </ul>
              <p>Services</p>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  Unsatisfactory Services: If the service provided by Susmo does not meet your expectations or the
                  agreed-upon terms, we may offer a partial or full refund, depending on the circumstances.
                </li>
                <li className="pb-1">
                  Failure to Deliver: If we are unable to fulfill the services you paid for due to unforeseen
                  circumstances, you will be eligible for a full refund.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">2. How to Request a Refund</p>
              <p className="text-sm font-medium text-[#000000CC]">
                To initiate a refund request, please follow these steps:
              </p>
              <ol className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  Contact Us: Reach out to our customer service team at [insert contact email or phone number].
                </li>
                <li className="pb-1">
                  Provide Details: Include your order number, proof of purchase, and a detailed description of the issue
                  with the product or service.
                </li>
                <li className="pb-1">
                  Return the Product (if applicable): If the product is required to be returned for a refund, we will
                  provide you with instructions on how to return it. Products must be returned in their original
                  packaging and in resalable condition.
                </li>
                <li className="pb-1">
                  Refund Decision: Once we receive your request, we will review it and notify you of the decision within
                  [insert time frame, e.g., 7-10 business days].
                </li>
              </ol>
            </div>
            <div>
              <p className="text-sm font-bold">3. Refund Process</p>
              <p className="text-sm font-medium text-[#000000CC]">
                If your refund request is approved, the following process will apply:
              </p>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  Credit or Refund: If eligible, the refund will be processed to the original method of payment.
                </li>
                <li className="pb-1">
                  Timeframe: Refunds will be processed within [insert number of days, e.g., 10-14 business days] from
                  the approval of the request.
                </li>
                <li className="pb-1">
                  Partial Refunds: In certain cases, such as if a service was partially completed, a partial refund may
                  be issued based on the work completed or products used.
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold">4. Non-Refundable Items</p>
              <p className="text-sm font-medium text-[#000000CC]">
                Certain products or services may not be eligible for a refund, including:
              </p>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  Custom or Personalized Products: Products that are customized or made to your specifications are
                  generally non-refundable.
                </li>
                <li className="pb-1">
                  Digital Products: Digital products or services (such as software downloads, online services, or
                  digital subscriptions) are not refundable once purchased, unless there is a technical issue or failure
                  to deliver the product.
                </li>
                <li className="pb-1">Gift Cards: Gift cards are not eligible for refund.</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">5. Exchange Policy</p>
              <p className="text-sm font-medium text-[#000000CC]">
                If you wish to exchange an item, we may offer an exchange for an identical or similar item, depending on
                availability. To exchange a product, please follow the same steps as for requesting a refund, and
                indicate your preferred exchange item.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold">6. Shipping Costs</p>
              <p className="text-sm font-medium text-[#000000CC]">
                If you wish to exchange an item, we may offer an exchange for an identical or similar item, depending on
                availability. To exchange a product, please follow the same steps as for requesting a refund, and
                indicate your preferred exchange item.
              </p>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  Product Returns: The customer is responsible for the shipping cost of returning products unless the
                  return is due to a defective or incorrect item.
                </li>
                <li className="pb-1">
                  Shipping Refunds: We do not refund shipping charges unless the return is due to a defect or an error
                  on our part.
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold">7. Changes to This Refund Policy</p>
              <p className="text-sm font-medium text-[#000000CC]">
                We reserve the right to update or modify this Refund Policy at any time. Any changes will be posted on
                this page with an updated effective date. Please review this policy periodically for any updates or
                changes.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold">8. Contact Us</p>
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
        )
      default:
        return null
    }
  }

  return (
    <section className="bg-black">
      <Navbar />
      <NewNav />
      <section
        id="about"
        className="about-section relative grid h-[450px] w-full items-center justify-center bg-black py-16"
      >
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
          <div className="flex h-full w-full items-center max-xl:mt-2 max-xl:justify-center max-xl:text-center max-sm:justify-center lg:mt-0 lg:items-center">
            <div className="flex w-full flex-col items-center justify-center">
              <p className="headfont  text-center text-6xl font-semibold text-[#FFFFFF] max-xl:text-3xl max-lg:mt-5 max-lg:text-4xl">
                Miscellaneous
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="headfont relative flex w-full flex-col items-center bg-[#EEEEEE] px-4 max-xl:px-6 md:pb-10">
        <div className="relative z-20 -mt-24 mb-4 flex gap-6  rounded-2xl bg-white p-8 xl:w-[1018px]">
          <div className="whitespace-nowrap">
            <p
              className={`cursor-pointer font-medium uppercase ${
                activeTab === "disclaimer" ? "font-bold underline" : "text-[#000000CC]"
              }`}
              onClick={() => setActiveTab("disclaimer")}
            >
              Disclaimer
            </p>
            <p
              className={`cursor-pointer font-medium uppercase ${
                activeTab === "shipping" ? "font-bold underline" : "text-[#000000CC]"
              }`}
              onClick={() => setActiveTab("shipping")}
            >
              Shipping Policy
            </p>
            <p
              className={`cursor-pointer font-medium uppercase ${
                activeTab === "refund" ? "font-bold underline" : "text-[#000000CC]"
              }`}
              onClick={() => setActiveTab("refund")}
            >
              Refund Policy
            </p>
          </div>
          <div className="flex flex-col border-l border-[#00000026] pl-6">{renderPolicyContent()}</div>
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

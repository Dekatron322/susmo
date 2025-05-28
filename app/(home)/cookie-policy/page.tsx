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

export default function CookiePolicy() {
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
          className=" relative z-10 pb-10 max-sm:px-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full w-full items-center max-xl:justify-center max-xl:text-center max-sm:justify-center lg:mt-0 lg:items-center">
            <div className="flex w-full flex-col items-center justify-center">
              <p className="headfont text-center  text-6xl font-semibold text-[#FFFFFF] max-xl:text-3xl max-lg:text-4xl  max-sm:text-3xl">
                Cookie Policy
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
            <p className="text-sm font-bold">1. What are Cookies?</p>
            <p className="text-sm font-medium text-[#000000CC]">
              Cookies are small text files that are placed on your device when you visit a website. They are used to
              store information about your browsing activity, preferences, or login details, allowing websites to
              recognize your device and provide a more personalized experience.
            </p>
            <p className="text-sm font-medium text-[#000000CC]">
              There are different types of cookies that can be used on our website:
            </p>
            <ul className="list-disc pl-8 text-sm">
              <li className="pb-1">
                Session Cookies: These are temporary cookies that are erased from your device once you close your
                browser. They are used to keep track of your activities during a session (e.g., when navigating between
                pages).
              </li>
              <li className="pb-1">
                Persistent Cookies: These cookies remain on your device for a set period or until you manually delete
                them. They are used to remember your preferences or actions across multiple sessions (e.g., language
                settings or login status).
              </li>
              <li className="pb-1">
                Third-Party Cookies: These cookies are placed by third-party services (such as analytics or advertising
                providers) when you visit our website. These cookies help gather data and provide services like
                personalized ads or traffic analysis.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold">2. How We Use Cookies</p>
            <p className="text-sm font-medium text-[#000000CC]">We use cookies for several purposes, including:</p>

            <ul className="list-disc pl-8 text-sm">
              <li className="pb-1">
                Enhancing User Experience: Cookies help us remember your preferences and personalize your experience on
                our site.
              </li>
              <li className="pb-1">
                Analytics: We use cookies to gather information about how visitors use our website, including the pages
                they visit and the links they click. This helps us improve the performance and content of our website.
              </li>
              <li className="pb-1">
                Advertising: We may use cookies to deliver personalized ads and measure their effectiveness.
              </li>
              <li className="pb-1">
                Authentication: Cookies are used to remember your login credentials, ensuring a smoother experience when
                you return to our site.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold">3. Cookie Categories We Use</p>
            <p className="text-sm font-medium text-[#000000CC]">
              We use the following categories of cookies on our website:
            </p>

            <ul className="list-disc pl-8 text-sm">
              <li className="pb-1">
                Strictly Necessary Cookies: These cookies are essential for the operation of our website and allow you
                to navigate and use its features. Without these cookies, certain services cannot be provided, such as
                accessing secure areas of the site.
              </li>
              <li className="pb-1">
                Performance Cookies: These cookies help us understand how visitors interact with our website, such as
                which pages are visited most often. This data helps us improve the website's functionality.
              </li>
              <li className="pb-1">
                Functionality Cookies: These cookies allow us to remember your preferences (such as language or region)
                to provide a more personalized experience.
              </li>
              <li className="pb-1">
                Targeting or Advertising Cookies: These cookies are used to deliver targeted ads to users and measure
                the effectiveness of advertising campaigns.
              </li>
            </ul>
          </div>

          {/*  */}

          <div>
            <p className="text-sm font-bold">4. Managing Cookies</p>
            <p className="text-sm font-medium text-[#000000CC]">
              You can control and manage cookies in the following ways:
            </p>

            <ul className="list-disc pl-8 text-sm">
              <li className="pb-1">
                Browser Settings: Most browsers allow you to manage cookie settings through the browser's privacy
                settings. You can delete or block cookies, but please note that doing so may affect the functionality of
                certain parts of the website.
              </li>
              <li className="pb-1">To manage cookies, refer to the following guides for popular browsers:</li>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  <a
                    href="/https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
                    target="_blank"
                    className="underline transition-all duration-200 ease-in-out hover:text-[#47CD63]"
                  >
                    Google Chrome
                  </a>
                </li>
                <li className="pb-1">
                  <a
                    href="/https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
                    target="_blank"
                    className="underline transition-all duration-200 ease-in-out hover:text-[#47CD63]"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li className="pb-1">
                  <a
                    href="https://support.apple.com/en-us/105082"
                    target="_blank"
                    className="underline transition-all duration-200 ease-in-out hover:text-[#47CD63]"
                  >
                    Safari
                  </a>
                </li>
                <li className="pb-1">
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/manage-cookies-and-site-data-in-microsoft-edge"
                    target="_blank"
                    className="underline transition-all duration-200 ease-in-out hover:text-[#47CD63]"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </ul>
            <ul className="list-disc pl-8 text-sm">
              <li className="pb-1">
                Opt-Out Tools: Some third-party services may offer opt-out tools that allow you to manage your cookie
                preferences. You can visit the following links to manage your preferences for advertising cookies:
              </li>
              <ul className="list-disc pl-8 text-sm">
                <li className="pb-1">
                  <a
                    href="https://myadcenter.google.com/home?sasb=true&ref=ad-settings"
                    target="_blank"
                    className="underline transition-all duration-200 ease-in-out hover:text-[#47CD63]"
                  >
                    Google Ads Settings
                  </a>
                </li>
                <li className="pb-1">Network Advertising Initiative (NAI)</li>
              </ul>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold">5. Third-Party Cookies</p>

            <p className="text-sm font-medium text-[#000000CC]">
              We may allow third-party companies, such as analytics providers or advertising networks, to place cookies
              on your device when you visit our website. These third parties may collect information about your online
              activities across different websites to provide targeted advertising or analyze website traffic.
            </p>
            <p className="text-sm font-medium text-[#000000CC]">
              For more information about third-party cookies, please refer to their respective privacy and cookie
              policies.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">6. Cookie Retention</p>
            <p className="text-sm font-medium text-[#000000CC]">
              The retention period for cookies varies depending on their type:
            </p>

            <ul className="list-disc pl-8 text-sm">
              <li className="pb-1">
                Session cookies are only retained for the duration of your browsing session and are deleted when you
                close your browser.
              </li>
              <li className="pb-1">
                Persistent cookies can stay on your device for up to several months, depending on the specific cookie.
              </li>
            </ul>
            <p className="text-sm font-medium text-[#000000CC]">
              You can manage or delete these cookies by adjusting your browser settings at any time.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold">7. Updates to this Cookie Policy</p>

            <p className="text-sm font-medium text-[#000000CC]">
              We may update this Cookie Policy periodically to reflect changes in our practices or legal requirements.
              Any changes will be posted on this page with an updated "Effective Date." Please check back regularly to
              stay informed about our use of cookies.
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

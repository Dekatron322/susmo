import { motion } from "framer-motion"
import React, { useState } from "react"

const PreorderAgreement = () => {
  const [isAgreement, setIsAgreement] = useState(false)

  const toggleAggrement = () => {
    setIsAgreement((prev) => {
      const newValue = !prev
      console.log("isHomeAutomation", newValue)

      console.log("formData.home_automation_integration:", newValue)
      return newValue
    })
  }
  return (
    <div className="flex w-full flex-col justify-center">
      <h6 className="text-lg font-bold text-[#ffffffcc] lg:text-center">Online Preorder Agreement</h6>

      <div className="mt-3  bg-[#282828] p-6 max-xs:p-4" style={{ height: "657px", overflowY: "auto" }}>
        <p className="text-sm text-[#ffffffcc] max-sm:text-xs lg:text-center">
          This agreement (&quot;Agreement&quot;) is entered into between SmartHaven Systems Private Limited
          (&quot;Company&quot;) and the Customer (&quot;You&quot;). By placing a preorder for Altima products, you agree
          to the terms and conditions outlined below.
        </p>
        <ul className="mt-4 grid gap-3 max-xs:text-xs">
          <p className=" font-bold text-[#FFFFFF]">1. Preorder Terms</p>
          <li className="text-[#FFFFFF99]">
            1.1. A 30% deposit is required at the time of booking to secure your preorder.
          </li>
          <li className="text-[#FFFFFF99]">
            1.2. The remaining balance is payable before shipment, upon receiving a final payment notice.
          </li>
          <li className="text-[#FFFFFF99]">
            1.3. Preorders are non-binding, and the Company reserves the right to reject or cancel preorders at its sole
            discretion.
          </li>
        </ul>

        <ul className="mt-4 grid gap-3 max-xs:text-xs">
          <p className=" font-bold text-[#FFFFFF]">2. Preorder Window</p>
          <li className="text-[#FFFFFF99]">
            2.1. The preorder window opens on November 1, 2024, and closes on June 30, 2025.
          </li>
          <li className="text-[#FFFFFF99]">2.2. Preorders submitted after the closing date will not be accepted.</li>
        </ul>

        <ul className="mt-4 grid gap-3 max-xs:text-xs">
          <p className=" font-bold text-[#FFFFFF]">3. Estimated Delivery</p>
          <li className="text-[#FFFFFF99]">
            3.1. The estimated delivery timeline is 4-5 months after the preorder window closes (i.e., between October
            and November 2025).
          </li>
          <li className="text-[#FFFFFF99]">
            3.2. Delays caused by unforeseen circumstances, including manufacturing or supply chain issues, are not the
            Company’s responsibility.
          </li>
        </ul>

        <ul className="mt-4 grid gap-3 max-xs:text-xs">
          <p className=" font-bold text-[#FFFFFF]">3. Estimated Delivery</p>
          <li className="text-[#FFFFFF99]">
            3.1. The estimated delivery timeline is 4-5 months after the preorder window closes (i.e., between October
            and November 2025).
          </li>
          <li className="text-[#FFFFFF99]">
            3.2. Delays caused by unforeseen circumstances, including manufacturing or supply chain issues, are not the
            Company’s responsibility.
          </li>
        </ul>

        <ul className="mt-4 grid gap-3 max-xs:text-xs">
          <p className=" font-bold text-[#FFFFFF]">4. Refund and Cancellation</p>
          <li className="text-[#FFFFFF99]">
            4.1. The 30% deposit is non-refundable unless the Company fails to deliver the product within 6 months after
            the estimated delivery period.
          </li>
          <li className="text-[#FFFFFF99]">
            4.2. You may cancel your preorder at any time, but refunds (if applicable) will be governed by the Company’s
            cancellation policy.
          </li>
          <li className="text-[#FFFFFF99]">
            4.3. Refunds for eligible cancellations will be processed within 14 working days.
          </li>
        </ul>

        <ul className="mt-4 grid gap-3 max-xs:text-xs">
          <p className=" font-bold text-[#FFFFFF]">5. Adjustments to Final Invoice</p>
          <li className="text-[#FFFFFF99]">
            5.1. The final invoice may include adjustments for shipping charges, customization fees, installation costs,
            extended warranty fees, product modifications, or applicable taxes based on your requests.
          </li>
          <li className="text-[#FFFFFF99]">
            5.2. Any adjustments will be communicated before the final payment notice is issued.
          </li>
          <li className="text-[#FFFFFF99]">
            5.3. Failure to pay the final adjusted invoice may result in the cancellation of your preorder.
          </li>
        </ul>
        <ul className="mt-4 grid gap-3 max-xs:text-xs">
          <p className=" font-bold text-[#FFFFFF]">6. Product Information</p>
          <li className="text-[#FFFFFF99]">
            6.1. Altima Core and Elite models come with distinct features. Please refer to the product comparison page
            for full details.
          </li>
          <li className="text-[#FFFFFF99]">
            6.2. Warranty terms and after-sales services are as per the Company’s standard policies and will be provided
            at the time of delivery.
          </li>
        </ul>
        <ul className="mt-4 grid gap-3 max-xs:text-xs">
          <p className=" font-bold text-[#FFFFFF]">7. Privacy and Data Usage</p>
          <li className="text-[#FFFFFF99]">
            7.1. The information you provide during preorder will only be used for processing your order and
            communication purposes.
          </li>
          <li className="text-[#FFFFFF99]">
            7.2. The Company will protect your data in accordance with its Privacy Policy.
          </li>
        </ul>
        <ul className="mt-4 grid gap-3 max-xs:text-xs">
          <p className=" font-bold text-[#FFFFFF]">8. Liability</p>
          <li className="text-[#FFFFFF99]">
            8.1. The Company is not liable for delays, interruptions, or non-performance caused by events beyond its
            control (e.g., natural disasters, regulatory issues).
          </li>
          <li className="text-[#FFFFFF99]">
            8.2. The Company’s total liability is limited to the value of your preorder deposit.
          </li>
        </ul>
        <ul className="mt-4 grid gap-3 max-xs:text-xs">
          <p className=" font-bold text-[#FFFFFF]">9. Governing Law</p>
          <li className="text-[#FFFFFF99]">
            9.1. This Agreement is governed by the laws of <b>India</b>.
          </li>
          <li className="text-[#FFFFFF99]">
            9.2. Any disputes arising from this Agreement will be subject to the exclusive jurisdiction of courts in{" "}
            <b>Mumbai, Maharashtra</b>.
          </li>
        </ul>

        <div className="mt-6 flex w-full items-start justify-center gap-2">
          <motion.img
            onClick={() => {
              toggleAggrement() // Only call the function if not disabled
            }}
            src={isAgreement ? "/CheckSquare.png" : "/CheckSquareEmpty.png"}
            width={24}
            height={24}
            alt=""
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
          />
          <p className="text-sm text-[#ffffffcc] max-sm:text-xs">
            I have read, understood, and agree to the terms and conditions of the Online Preorder Agreement.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2 border-b border-[#FFFFFF0D] pb-4 pt-5 text-center">
        <h6 className="text-base font-bold text-[#FFFFFFcc] max-sm:text-sm">Note</h6>
        <p className="text-sm text-[#FFFFFFcc]  opacity-80">
          You will receive a confirmation email once your preorder is complete
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2 border-b border-[#FFFFFF0D] pb-4 pt-5 text-center">
        <h6 className="text-base font-bold text-[#FFFFFFcc] max-sm:text-sm">Domestic Shipping </h6>
        <p className="text-sm text-[#FFFFFFcc] opacity-80 max-sm:text-xs 2xl:px-16">
          Final shipping charges for domestic delivery will be calculated at dispatch and added to the invoice based on
          your delivery address. Packaging and handling fees are not charged. By preordering, you agree to pay the
          shipping charges with the remaining balance.
        </p>
      </div>
    </div>
  )
}

export default PreorderAgreement

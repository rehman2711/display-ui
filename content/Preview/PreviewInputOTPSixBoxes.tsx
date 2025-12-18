import { useState } from "react"

import { OTPInput } from "@/registry/default/displayui/InputOTP"

const PreviewInputOTPSixBoxes = () => {
  const [otpValue, setOtpValue] = useState("")
  return (
    <>
      <div className="">
        <OTPInput
          length={6}
          disabled={false}
          value={otpValue}
          autoFocus={false}
          onComplete={(val) => {
            setOtpValue(val)
          }}
        />
        <div className="text-sm text-gray-600">
          Current Value: <span className="font-mono">{otpValue}</span>
        </div>
      </div>
    </>
  )
}

export default PreviewInputOTPSixBoxes

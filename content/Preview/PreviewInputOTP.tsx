import { useState } from "react"

import { OTPInput } from "@/registry/default/displayui/InputOTP"

const PreviewInputOTP = () => {
  const [otpValue, setOtpValue] = useState("")
  return (
    <>
      <div>
        <OTPInput
          length={4}
          disabled={false}
          autoFocus={false}
          value={otpValue}
          onComplete={(val) => {
            setOtpValue(val)
          }}
        />
        <div className="text-sm text-black dark:text-white">
          Current Value: <span className="font-mono text-black dark:text-white">{otpValue}</span>
        </div>
      </div>
    </>
  )
}

export default PreviewInputOTP

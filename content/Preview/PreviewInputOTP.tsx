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
        <div className="text-sm text-gray-600">
          Current Value: <span className="font-mono">{otpValue}</span>
        </div>
      </div>
    </>
  )
}

export default PreviewInputOTP

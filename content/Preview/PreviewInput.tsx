import { Input } from "@/registry/default/displayui/Input"
import { Label } from "@/registry/default/displayui/Label"

const PreviewInput = () => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center w-1/4">
        <div>
          <Label className="text-sm font-bold">Input Text :</Label>
          <Input border="primary" type="text" placeholder="Enter Any Text" />
        </div>
        <div>
          <Label className="text-sm font-bold">Input Email :</Label>
          <Input border="primary" type="email" placeholder="Enter Your Email" />
        </div>
        <div>
          <Label className="text-sm font-bold">Input Password :</Label>
          <Input
            border="primary"
            type="password"
            placeholder="Enter Your Password"
          />
        </div>
        <div>
          <Label className="text-sm font-bold">Input Number :</Label>
          <Input
            border="primary"
            type="number"
            placeholder="Enter Any Number"
          />
        </div>
      </div>
    </>
  )
}

export default PreviewInput

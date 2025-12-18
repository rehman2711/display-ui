import { Label } from "@/registry/default/displayui/Label"
import { RadioGroup, RadioItem } from "@/registry/default/displayui/RadioGroups"

const PreviewRadioGroupSuccess = () => {
  return (
    <>
      <RadioGroup className="flex flex-col justify-center items-center gap-8">
        <RadioItem value="success" variant="success" />
        <RadioItem value="success" variant="success" />
        <RadioItem value="success" variant="success" />
        <RadioItem value="success" variant="success" />
      </RadioGroup>
    </>
  )
}

export default PreviewRadioGroupSuccess

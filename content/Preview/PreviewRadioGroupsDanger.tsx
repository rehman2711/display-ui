import { Label } from "@/registry/default/displayui/Label"
import { RadioGroup, RadioItem } from "@/registry/default/displayui/RadioGroups"

const PreviewRadioGroupDanger = () => {
  return (
    <>
      <RadioGroup className="flex flex-col justify-center items-center gap-8">
        <RadioItem value="danger" variant="danger" />
        <RadioItem value="danger" variant="danger" />
        <RadioItem value="danger" variant="danger" />
        <RadioItem value="danger" variant="danger" />
      </RadioGroup>
    </>
  )
}

export default PreviewRadioGroupDanger

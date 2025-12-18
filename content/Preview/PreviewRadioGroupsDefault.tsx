import { RadioGroup, RadioItem } from "@/registry/default/displayui/RadioGroups"

const PreviewRadioGroupDefault = () => {
  return (
    <>
      <RadioGroup className="flex flex-col justify-center items-center gap-8">
        <RadioItem value="default" />
        <RadioItem value="default" />
        <RadioItem value="default" />
        <RadioItem value="default" />
      </RadioGroup>
    </>
  )
}

export default PreviewRadioGroupDefault

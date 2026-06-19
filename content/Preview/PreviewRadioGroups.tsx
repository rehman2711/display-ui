import { Label } from "@/registry/default/displayui/Label"
import { RadioGroup, RadioItem } from "@/registry/default/displayui/RadioGroups"

const PreviewRadioGroup = () => {
  return (
    <>
      <div className="">
        <RadioGroup className="flex flex-col justify-center items-center gap-8">
          {/* Default */}
          <div className="flex items-center gap-2">
            <RadioItem value="default" />
            <Label className="font-semibold">Default</Label>
          </div>

          {/* Success */}
          <div className="flex items-center gap-2">
            <RadioItem value="success" variant="success" />
            <Label className="font-semibold">Success</Label>
          </div>

          {/* Danger */}
          <div className="flex items-center gap-2">
            <RadioItem value="danger" variant="danger" />
            <Label className="font-semibold">Danger</Label>
          </div>

          {/* Warning */}
          <div className="flex items-center gap-2">
            <RadioItem value="warning" variant="warning" />
            <Label className="font-semibold">Warning</Label>
          </div>
        </RadioGroup>
      </div>
    </>
  )
}

export default PreviewRadioGroup

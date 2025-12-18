import { Label } from "@/registry/default/displayui/Label"
import { RadioGroup, RadioItem } from "@/registry/default/displayui/RadioGroups"

const PreviewRadioGroupWarning = () => {
  return(
    <>

            <RadioGroup className="flex flex-col justify-center items-center gap-8">
          
                <RadioItem value="warning" variant="warning" />
                <RadioItem value="warning" variant="warning" />
                <RadioItem value="warning" variant="warning" />
                <RadioItem value="warning" variant="warning" />
                
            </RadioGroup>
        
      </>
  )
}

export default PreviewRadioGroupWarning

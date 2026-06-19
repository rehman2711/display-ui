import { Button } from "@/registry/default/displayui/Button"
import { Tooltip } from "@/registry/default/displayui/Tooltip"

const PreviewTooltipDefault = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Tooltip.Root>
          <Tooltip.Trigger>
            <Button>Hover me</Button>
          </Tooltip.Trigger>
          <Tooltip.Content content="I am a tooltip!" position="simple" />
        </Tooltip.Root>
      </div>
    </>
  )
}

export default PreviewTooltipDefault

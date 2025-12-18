import { Button } from "@/registry/default/displayui/Button"
import { Tooltip } from "@/registry/default/displayui/Tooltip"

const PreviewTooltipTop = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Tooltip.Root>
          <Tooltip.Trigger>
            <Button>Hover me</Button>
          </Tooltip.Trigger>
          <Tooltip.Content content="I am a tooltip!" position="top" />
        </Tooltip.Root>
      </div>
    </>
  )
}

export default PreviewTooltipTop

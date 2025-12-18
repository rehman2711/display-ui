import { Button } from "@/registry/default/displayui/Button"
import { Tooltip } from "@/registry/default/displayui/Tooltip"

const PreviewTooltipRight = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Tooltip.Root>
          <Tooltip.Trigger>
            <Button>Hover me</Button>
          </Tooltip.Trigger>
          <Tooltip.Content content="Tooltip on the right" position="right" />
        </Tooltip.Root>
      </div>
    </>
  )
}

export default PreviewTooltipRight

import { Button } from "@/registry/default/displayui/Button"
import { Tooltip } from "@/registry/default/displayui/Tooltip"

const PreviewTooltipBottom = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Tooltip.Root>
          <Tooltip.Trigger>
            <Button>Hover me</Button>
          </Tooltip.Trigger>
          <Tooltip.Content content="Tooltip at the bottom" position="bottom" />
        </Tooltip.Root>
      </div>
    </>
  )
}

export default PreviewTooltipBottom

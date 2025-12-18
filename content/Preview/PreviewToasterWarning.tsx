import { Button } from "@/registry/default/displayui/Button"
import { Toaster } from "@/registry/default/displayui/Toaster"

const PreviewToasterWarning = () => {
  return (
    <>
      <div>
        <Toaster.Main>
          <Toaster.Trigger
            message="Please review your input again!"
            toastType="warning"
            position="bottom-left"
            className="bg-yellow-500 "
          >
            Warning
          </Toaster.Trigger>
        </Toaster.Main>
      </div>
    </>
  )
}

export default PreviewToasterWarning

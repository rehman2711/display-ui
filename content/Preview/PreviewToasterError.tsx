import { Button } from "@/registry/default/displayui/Button"
import { Toaster } from "@/registry/default/displayui/Toaster"

const PreviewToasterError = () => {
  return (
    <>
      <div>
        <Toaster.Main>
          <Toaster.Trigger
            message="Something went wrong!"
            toastType="error"
            position="top-left"
            className="bg-red-500"
          >
            Show Error
          </Toaster.Trigger>
        </Toaster.Main>
      </div>
    </>
  )
}

export default PreviewToasterError

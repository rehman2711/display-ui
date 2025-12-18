import { Button } from "@/registry/default/displayui/Button"
import { Toaster } from "@/registry/default/displayui/Toaster"

const PreviewToasterSuccess = () => {
  return (
    <>
      <div>
        <Toaster.Main>
          <Toaster.Trigger
            message="Profile updated successfully!"
            toastType="success"
            position="top-right"
            className="bg-green-500"
          >
            Success
          </Toaster.Trigger>
        </Toaster.Main>
      </div>
    </>
  )
}

export default PreviewToasterSuccess

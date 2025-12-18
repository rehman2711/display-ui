import { Button } from "@/registry/default/displayui/Button"
import { Toaster } from "@/registry/default/displayui/Toaster"

const PreviewToaster = () => {
  return (
    <>
      <div>
        <Toaster.Main>
          {/* Dont Use button inside trigger ---> trigger is work as button */}
          <Toaster.Trigger
            message="Profile updated successfully!"
            toastType="info"
            position="top-right"
            className="bg-blue-500"
          >
            Primary
          </Toaster.Trigger>
        </Toaster.Main>
      </div>
    </>
  )
}

export default PreviewToaster

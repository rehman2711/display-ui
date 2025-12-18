import { Button } from "@/registry/default/displayui/Button"
import { Toaster } from "@/registry/default/displayui/Toaster"

const PreviewToasterInfo = () => {
  return (
    <>
      <div>
        <Toaster.Main>
          <Toaster.Trigger
            message="Information message displayed."
            toastType="info"
            position="bottom-right"
            className="bg-blue-500"
          >
            Primary
          </Toaster.Trigger>
        </Toaster.Main>
      </div>
    </>
  )
}

export default PreviewToasterInfo

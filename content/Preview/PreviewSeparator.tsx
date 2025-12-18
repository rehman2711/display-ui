import { Separator } from "@/registry/default/displayui/Separator"

const PreviewSeparator = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <p>Default separator</p>
        <Separator />

        <br />

        <p>Success separator</p>
        <Separator variant="success" />

        <br />

        <p>Danger separator</p>
        <Separator variant="danger" />
      </div>
    </>
  )
}

export default PreviewSeparator

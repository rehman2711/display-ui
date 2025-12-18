import { Separator } from "@/registry/default/displayui/Separator"

const PreviewSeparatorHorizontal = () => {
  return (
    <>
      <div className="flex gap-4 justify-center items-center w-[40%]">
        <Separator size="lg" className="bg-yellow-500" />
        <p>OR</p>
        <Separator size="lg" className="bg-yellow-500" />
      </div>
    </>
  )
}
export default PreviewSeparatorHorizontal

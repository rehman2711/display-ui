import { Separator } from "@/registry/default/displayui/Separator"

const PreviewSeparatorVertical = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50%]">
      <Separator orientation="vertical" className="bg-yellow-400 h-20" />
      <p className="text-sm font-medium text-gray-700">OR</p>
      <Separator orientation="vertical" className="bg-yellow-400 h-20" />
    </div>
  )
}

export default PreviewSeparatorVertical

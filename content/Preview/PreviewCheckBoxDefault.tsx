import { CheckBox } from "@/registry/default/displayui/CheckBox"

const PreviewCheckBoxDefault = () => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <CheckBox boxSize="md" />
        <CheckBox boxSize="lg" />
        <CheckBox boxSize="xl" />
      </div>
    </>
  )
}

export default PreviewCheckBoxDefault

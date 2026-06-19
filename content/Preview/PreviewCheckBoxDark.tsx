import { CheckBox } from "@/registry/default/displayui/CheckBox"

const PreviewCheckBoxDark = () => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <CheckBox variant="dark" boxSize="md"></CheckBox>
        <CheckBox variant="dark" boxSize="lg"></CheckBox>
        <CheckBox variant="dark" boxSize="xl"></CheckBox>
      </div>
    </>
  )
}

export default PreviewCheckBoxDark

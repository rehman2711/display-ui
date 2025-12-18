import { CheckBox } from "@/registry/default/displayui/CheckBox"

const PreviewCheckBoxDanger = () => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <CheckBox variant="danger" boxSize="md"></CheckBox>
        <CheckBox variant="danger" boxSize="lg"></CheckBox>
        <CheckBox variant="danger" boxSize="xl"></CheckBox>
      </div>
    </>
  )
}

export default PreviewCheckBoxDanger

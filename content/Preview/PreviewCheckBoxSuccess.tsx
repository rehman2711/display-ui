import { CheckBox } from "@/registry/default/displayui/CheckBox"

const PreviewCheckBoxSuccess = () => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <CheckBox variant="success" boxSize="md"></CheckBox>
        <CheckBox variant="success" boxSize="lg"></CheckBox>
        <CheckBox variant="success" boxSize="xl"></CheckBox>
      </div>
    </>
  )
}

export default PreviewCheckBoxSuccess

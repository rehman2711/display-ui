import { CheckBox } from "@/registry/default/displayui/CheckBox"

const PreviewCheckBox = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-start gap-4">
          <div className="flex justify-start items-center gap-3">
            <CheckBox variant="dark" boxSize="md"></CheckBox>
            <label htmlFor="dark">I agree the terms and conditions</label>
          </div>

          <div className="flex justify-start items-center gap-3">
            <CheckBox variant="primary" boxSize="md"></CheckBox>
            <label htmlFor="primary">I agree the terms and conditions</label>
          </div>

          <div className="flex justify-start items-center gap-3">
            <CheckBox variant="success" boxSize="md"></CheckBox>
            <label htmlFor="success">Yes , apply the edited changes</label>
          </div>

          <div className="flex justify-start items-center gap-3">
            <CheckBox variant="danger" boxSize="md"></CheckBox>
            <label htmlFor="danger">
              Yes delete account , action cannot be undone
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default PreviewCheckBox

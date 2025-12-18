import { ButtonRing } from "@/registry/default/displayui/ButtonRing"

const PreviewButtonRingSuccess = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <ButtonRing variant="success" size="sm" RingOff={3000}>
          Disha
        </ButtonRing>
      </div>
    </>
  )
}

export default PreviewButtonRingSuccess

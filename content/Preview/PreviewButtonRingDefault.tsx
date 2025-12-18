import { ButtonRing } from "@/registry/default/displayui/ButtonRing"

const PreviewButtonRingDefault = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <ButtonRing variant="primary" size="sm" RingOff={3000}>
          Rehman
        </ButtonRing>
      </div>
    </>
  )
}

export default PreviewButtonRingDefault

import { ButtonRing } from "@/registry/default/displayui/ButtonRing"

const PreviewButtonRingDanger = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <ButtonRing variant="danger" size="sm" RingOff={3000}>
          Poonam
        </ButtonRing>
      </div>
    </>
  )
}

export default PreviewButtonRingDanger

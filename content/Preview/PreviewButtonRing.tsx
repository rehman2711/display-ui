import { ButtonRing } from "@/registry/default/displayui/ButtonRing"

const PreviewButtonRing = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 my-10">
        <ButtonRing variant="primary" size="sm" RingOff={10000}>
          Rehman
        </ButtonRing>
        <ButtonRing variant="success" size="sm" RingOff={10000}>
          Disha
        </ButtonRing>
        <ButtonRing variant="solid" size="sm" RingOff={10000}>
          Palak
        </ButtonRing>
        <ButtonRing variant="danger" size="sm" RingOff={10000}>
          Poonam
        </ButtonRing>
      </div>
    </>
  )
}

export default PreviewButtonRing

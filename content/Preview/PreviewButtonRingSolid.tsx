import { ButtonRing } from "@/registry/default/displayui/ButtonRing"

const PreviewButtonRingSolid = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <ButtonRing variant="solid" size="sm" RingOff={3000}>
          Palak
        </ButtonRing>
      </div>
    </>
  )
}

export default PreviewButtonRingSolid

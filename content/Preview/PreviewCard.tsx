import { ButtonRing } from "@/registry/default/displayui/ButtonRing"
import { Card } from "@/registry/default/displayui/Card"

const PreviewCard = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Card.Main className="w-[80%]" shadow="md">
          <Card.Area className="">
            <Card.Image
              className="scale-100"
              radius="none"
              fit="cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ></Card.Image>
          </Card.Area>
          <Card.Area className="p-4">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Card Section</h2>
              <p className="text-md">
                A card component is a reusable UI element used to group related
                content{" "}
              </p>

              <div className="flex justify-center">
                <ButtonRing size="sm" variant="success" className="my-2" RingOff={3000}>
                  Hire Me
                </ButtonRing>
              </div>
            </div>
          </Card.Area>
        </Card.Main>
      </div>
    </>
  )
}

export default PreviewCard

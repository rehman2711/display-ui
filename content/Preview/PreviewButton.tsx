import { Button } from "@/registry/default/displayui/Button"

const PreviewButton = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-4 my-10">
        <Button variant="solid" size="sm">
          Rehman
        </Button>

        <Button variant="outline" size="sm">
          Disha
        </Button>

        <Button variant="ghost" size="sm">
          Palak
        </Button>

        <Button variant="link" size="sm">
          Poonam
        </Button>
      </div>
    </>
  )
}

export default PreviewButton

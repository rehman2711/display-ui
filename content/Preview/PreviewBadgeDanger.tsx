import { Badge } from "@/registry/default/displayui/Badge"

const PreviewBadgeDanger = () => {
  return (
    <>
      <div className="flex gap-4">
        <Badge variant="danger" radius="sm">
          <b>Badge</b>
        </Badge>
        <Badge variant="danger" radius="sm">
        Badge
        </Badge>
        <Badge variant="danger" radius="md">
        Badge
        </Badge>
        <Badge variant="danger" radius="lg">
        Badge
        </Badge>
        <Badge variant="danger" radius="pill">
        Badge
        </Badge>
      </div>
    </>
  )
}

export default PreviewBadgeDanger

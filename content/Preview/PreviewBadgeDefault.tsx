import { Badge } from "@/registry/default/displayui/Badge"

const PreviewBadgeDefault = () => {
  return (
    <>
      <div className="flex gap-4">
        <Badge variant="primary" radius="sm">
          <b>Badge</b>
        </Badge>
        <Badge variant="primary" radius="sm">
          Badge
        </Badge>
        <Badge variant="primary" radius="md">
          Badge
        </Badge>
        <Badge variant="primary" radius="lg">
          Badge
        </Badge>
        <Badge variant="primary" radius="pill">
          Badge
        </Badge>
      </div>
    </>
  )
}

export default PreviewBadgeDefault

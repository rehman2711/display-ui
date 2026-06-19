import { Badge } from "@/registry/default/displayui/Badge"

const PreviewBadgeWarning = () => {
  return (
    <>
      <div className="flex gap-4">
        <Badge variant="warning" radius="sm">
          <b>Badge</b>
        </Badge>
        <Badge variant="warning" radius="sm">
          Badge
        </Badge>
        <Badge variant="warning" radius="md">
          Badge
        </Badge>
        <Badge variant="warning" radius="lg">
          Badge
        </Badge>
        <Badge variant="warning" radius="pill">
          Badge
        </Badge>
      </div>
    </>
  )
}

export default PreviewBadgeWarning

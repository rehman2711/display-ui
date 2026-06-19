import { Badge } from "@/registry/default/displayui/Badge"

const PreviewBadgeSuccess = () => {
  return (
    <>
      <div className="flex gap-4">
        <Badge variant="success" radius="sm">
          <b>Badge</b>
        </Badge>
        <Badge variant="success" radius="sm">
          Badge
        </Badge>
        <Badge variant="success" radius="md">
          Badge
        </Badge>
        <Badge variant="success" radius="lg">
          Badge
        </Badge>
        <Badge variant="success" radius="pill">
          Badge
        </Badge>
      </div>
    </>
  )
}

export default PreviewBadgeSuccess

import { Avatar } from "@/registry/default/displayui/Avatar"

const PreviewAvatarGroup = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <Avatar.Root>
          <Avatar.Image
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User Avatar"
            className=" h-full"
          />
        </Avatar.Root>

        <Avatar.Root>
          <Avatar.Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User Avatar"
            className="rounded-lg"
          />
        </Avatar.Root>

        <Avatar.Root>
          <Avatar.Image
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User Avatar"
          />
        </Avatar.Root>
      </div>
    </>
  )
}

export default PreviewAvatarGroup

import { Avatar } from "@/registry/default/displayui/Avatar"

const PreviewAvatarDefault = () => {
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
      </div>
    </>
  )
}

export default PreviewAvatarDefault

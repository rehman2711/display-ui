import { House, LogIn, LogOut, Receipt, Settings, Truck } from "lucide-react"

import { DropdownMenu } from "@/registry/default/displayui/DropdownMenu"

const Preview = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <DropdownMenu.Main>
          <DropdownMenu.Trigger>Profile</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item
              className="flex justify-start items-center gap-4"
              onClick={() => alert("View Profile")}
              icon={<House className="w-4 h-4" />}
            >
              <span>My Profile</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className="flex justify-start items-center gap-4"
              onClick={() => alert("View Profile")}
              icon={<Receipt className="w-4 h-4" />}
            >
              <span>Billings</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className="flex justify-start items-center gap-4"
              onClick={() => alert("View Profile")}
              icon={<Settings className="w-4 h-4" />}
            >
              <span>Settings</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className="flex justify-start items-center gap-4"
              onClick={() => alert("Settings")}
              icon={<LogIn className="w-4 h-4" />}
            >
              <span>Login</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className="flex justify-start items-center gap-4"
              onClick={() => alert("Logout")}
              icon={<LogOut className="w-4 h-4" />}
            >
              <span>Logout</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className="flex justify-start items-center gap-4"
              onClick={() => alert("Logout")}
              icon={<Truck className="w-4 h-4" />}
            >
              <span>Support</span>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Main>
      </div>
    </>
  )
}

export default Preview

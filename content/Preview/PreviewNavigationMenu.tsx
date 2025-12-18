import { Label } from "@/registry/default/displayui/Label"
import {
  NavigationMenuBar,
  NavigationMenuItem,
  NavigationMenuLogo,
} from "@/registry/default/displayui/NavigationMenu"

const PreviewNavigationMenuBar = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <NavigationMenuBar>
          <NavigationMenuLogo
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=""
          ></NavigationMenuLogo>
          <NavigationMenuItem
            href="/?path=/story/components-avatar--default"
            className="p-2 rounded focus:bg-purple-400 hover:bg-blue-400"
            target="_blank"
          >
            <Label>Avatar</Label>
          </NavigationMenuItem>
          <NavigationMenuItem
            href="/?path=/story/components-badge--default"
            className="p-2 rounded focus:bg-purple-400 hover:bg-blue-400"
            target="_blank"
          >
            <Label>Badge</Label>
          </NavigationMenuItem>
          <NavigationMenuItem
            href="/?path=/story/components-buttonring--default"
            className="p-2 rounded focus:bg-purple-400 hover:bg-blue-400"
            target="_blank"
          >
            <Label>Button</Label>
          </NavigationMenuItem>
          <NavigationMenuItem
            href="/?path=/story/components-drawer--default"
            className="p-2 rounded focus:bg-purple-400 hover:bg-blue-400"
            target="_blank"
          >
            <Label>Drawer</Label>
          </NavigationMenuItem>
          <NavigationMenuItem
            href="/?path=/story/components-infinitecarousel--default"
            className="p-2 rounded focus:bg-purple-400 hover:bg-blue-400"
            target="_blank"
          >
            <Label>Carousel</Label>
          </NavigationMenuItem>
        </NavigationMenuBar>
      </div>
    </>
  )
}

export default PreviewNavigationMenuBar

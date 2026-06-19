import { Registry } from "@/registry/schema"

export const ui: Registry = [
  {
    name: "Accordion",
    type: "registry:component",
    dependencies: ["lucide-react", "class-variance-authority"],
    files: [{ path: "registry/displayui/Accordion.tsx", type: "registry:ui" }],
  },
  {
    name: "AlertDialog",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [
      { path: "registry/displayui/AlertDialog.tsx", type: "registry:ui" },
    ],
  },
  {
    name: "Avatar",
    type: "registry:component",
    dependencies: [],
    files: [{ path: "registry/displayui/Avatar.tsx", type: "registry:ui" }],
  },
  {
    name: "Badge",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [{ path: "registry/displayui/Badge.tsx", type: "registry:ui" }],
  },
  {
    name: "Breadcrumb",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [{ path: "registry/displayui/Breadcrumb.tsx", type: "registry:ui" }],
  },
  {
    name: "Button",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [{ path: "registry/displayui/Button.tsx", type: "registry:ui" }],
  },
  {
    name: "ButtonRing",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [{ path: "registry/displayui/ButtonRing.tsx", type: "registry:ui" }],
  },
  {
    name: "Calendar",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [{ path: "registry/displayui/Calendar.tsx", type: "registry:ui" }],
  },
  {
    name: "Card",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [{ path: "registry/displayui/Card.tsx", type: "registry:ui" }],
  },
  {
    name: "Carousel",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [{ path: "registry/displayui/Carousel.tsx", type: "registry:ui" }],
  },
  {
    name: "CheckBox",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [{ path: "registry/displayui/CheckBox.tsx", type: "registry:ui" }],
  },
  {
    name: "Drawer",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [{ path: "registry/displayui/Drawer.tsx", type: "registry:ui" }],
  },
  {
    name: "DropdownMenu",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [
      { path: "registry/displayui/DropdownMenu.tsx", type: "registry:ui" },
    ],
  },
  {
    name: "InfiniteCarousel",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [
      { path: "registry/displayui/InfiniteCarousel.tsx", type: "registry:ui" },
    ],
  },
  {
    name: "Input",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [{ path: "registry/displayui/Input.tsx", type: "registry:ui" }],
  },
  {
    name: "InputOTP",
    type: "registry:component",
    dependencies: [],
    files: [{ path: "registry/displayui/InputOTP.tsx", type: "registry:ui" }],
  },
  {
    name: "Label",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [{ path: "registry/displayui/Label.tsx", type: "registry:ui" }],
  },
  {
    name: "NavigationMenu",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [
      { path: "registry/displayui/NavigationMenu.tsx", type: "registry:ui" },
    ],
  },
  {
    name: "NavigationMenuMac",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [
      { path: "registry/displayui/NavigationMenuMac.tsx", type: "registry:ui" },
    ],
  },
  {
    name: "RadioGroups",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [
      { path: "registry/displayui/RadioGroups.tsx", type: "registry:ui" },
    ],
  },
  {
    name: "Separator",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [{ path: "registry/displayui/Separator.tsx", type: "registry:ui" }],
  },
  {
    name: "Table",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [{ path: "registry/displayui/Table.tsx", type: "registry:ui" }],
  },
  {
    name: "Toaster",
    type: "registry:component",
    dependencies: ["lucide-react", "framer-motion"],
    files: [{ path: "registry/displayui/Toaster.tsx", type: "registry:ui" }],
  },
  {
    name: "Tooltip",
    type: "registry:component",
    dependencies: ["class-variance-authority"],
    files: [{ path: "registry/displayui/Tooltip.tsx", type: "registry:ui" }],
  },
]

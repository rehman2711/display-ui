import type { ReactNode } from "react"
import { Book, Pen } from "lucide-react"

import { source } from "@/lib/source"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DocsLayout } from "@/components/notebook"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <DocsLayout
        sidebar={{
          tabs: [
            {
              icon: <TabIcon icon={<Book />} />,
              title: "Display UI",
              description: "Learn to use Display UI",
              url: "/docs",
            },
            {
              icon: <TabIcon icon={<Pen />} />,
              title: "Portfolio",
              description: "Rehman Portfolio Website",
              url: "https://display-ui.vercel.app",
            },
          ],
        }}
        tree={source.pageTree}
      >
        {children}
      </DocsLayout>
    </SidebarProvider>
  )
}

const TabIcon = ({ icon }: { icon: ReactNode }) => {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-fd-muted-foreground/20 to-fd-muted-foreground/40 text-fd-foreground [&>svg]:size-5">
      {icon}
    </div>
  )
}

import "./global.css"

import type { ReactNode } from "react"
import { Metadata } from "next"
import { RootProvider } from "fumadocs-ui/provider"

import { fontMono, fontSans } from "@/lib/fonts"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/registry/lib/utils"

export const metadata: Metadata = {
  title: {
    default: "Display UI - Modern React Component Library",
    template: "%s | Display UI",
  },
  description:
    "Display UI is a collection of re-usable components that you can copy and paste into your web apps.",
  keywords: [
    "Next.js",
    "React",
    "Component Library",
    "UI Library",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "TypeScript",
    "Frontend Development",
    "Web Development",
    "UI Components",
    "Design System",
  ],
  authors: [
    {
      name: "rehmankalawant",
      url: "https://github.com/rehmankalawant",
    },
  ],
  creator: "rehmankalawant",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://display-ui.vercel.app",
    title: "Display UI - Modern React Component Library",
    description:
      "Display UI is a collection of reusable components that you can copy and paste into your web apps.",
    siteName: "Display UI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Display UI - Modern React Component Library",
    description:
      "Display UI is a collection of reusable components that you can copy and paste into your web apps.",
    creator: "@rehmankalawant",
  },
  metadataBase: new URL("https://display-ui.vercel.app"),
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(fontSans.variable, fontMono.variable)}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-svh font-sans antialiased">
        <RootProvider>{children}</RootProvider>
        <Toaster />
      </body>
    </html>
  )
}

import type { ReactNode } from "react"

import { Footer, Header } from "./layout.client"

export default function Layout({
  children,
}: {
  children: ReactNode
}): React.ReactElement {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

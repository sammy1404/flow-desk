import LiveBlocksProvider from "@/components/LiveBlocksProvider"
import React, { Children } from "react"

function pageLayout({children}:{children:React.ReactNode}) {
  return (
    <LiveBlocksProvider>{children}</LiveBlocksProvider>
  )
}

export default pageLayout
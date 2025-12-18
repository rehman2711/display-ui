"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface APITableRow {
  attribute: string
  type: string
  description: string
  default?: string
}

interface APITableProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: APITableRow[]
}

export function APITable({ data = [], className, ...props }: APITableProps) {
  if (!data || data.length === 0) {
    return (
      <div className={cn("text-sm text-muted-foreground", className)} {...props}>
        No API data available.
      </div>
    )
  }

  return (
    <div className={cn("overflow-x-auto w-full", className)} {...props}>
      <table className="w-full table-auto border-collapse text-sm">
        <thead>
          <tr>
            <th className="text-left px-3 py-2 font-medium">Attribute</th>
            <th className="text-left px-3 py-2 font-medium">Type</th>
            <th className="text-left px-3 py-2 font-medium">Description</th>
            <th className="text-left px-3 py-2 font-medium">Default</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.attribute} className="odd:bg-muted/30 even:bg-white/5">
              <td className="px-3 py-2 align-top font-medium">{row.attribute}</td>
              <td className="px-3 py-2 align-top text-muted-foreground">
                <code>{row.type}</code>
              </td>
              <td className="px-3 py-2 align-top">{row.description}</td>
              <td className="px-3 py-2 align-top text-muted-foreground">
                {row.default ?? "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default APITable

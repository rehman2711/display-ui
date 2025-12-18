"use client";

import { ComponentProps, ReactNode, forwardRef } from "react";
import { cn } from "@/registry/lib/utils";

/* ---------- Table ---------- */
type TableProps = ComponentProps<"table"> & { children?: ReactNode };

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, children, ...props }, ref) => (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      >
        {children}
      </table>
    </div>
  )
);
Table.displayName = "Table";

/* ---------- Table Head ---------- */
type TableHeadProps = ComponentProps<"thead"> & { children?: ReactNode };

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ className, children, ...props }, ref) => (
    <thead
      ref={ref}
      className={cn(
        "bg-muted/50 text-xs font-medium text-black [&_th]:h-12 [&_th]:px-4 [&_th]:text-left",
        className
      )}
      {...props}
    >
      {children}
    </thead>
  )
);
TableHead.displayName = "TableHead";

/* ---------- Table Body ---------- */
type TableBodyProps = ComponentProps<"tbody"> & { children?: ReactNode };

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, children, ...props }, ref) => (
    <tbody
      ref={ref}
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    >
      {children}
    </tbody>
  )
);
TableBody.displayName = "TableBody";

/* ---------- Table Row ---------- */
type TableRowProps = ComponentProps<"tr"> & { children?: ReactNode };

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, children, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors !hover:bg-yellow-500 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    >
      {children}
    </tr>
  )
);
TableRow.displayName = "TableRow";

/* ---------- Table Head Cell (th) ---------- */
type TableHeadCellProps = ComponentProps<"th"> & { children?: ReactNode };

export const TableHeadCell = forwardRef<
  HTMLTableHeaderCellElement,
  TableHeadCellProps
>(({ className, children, ...props }, ref) => (
  <th
    ref={ref}
    className={cn("px-4 py-2 text-left align-middle font-medium", className)}
    {...props}
  >
    {children}
  </th>
));
TableHeadCell.displayName = "TableHeadCell";

/* ---------- Table Cell (td) ---------- */
type TableCellProps = ComponentProps<"td"> & { children?: ReactNode };

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, children, ...props }, ref) => (
    <td
      ref={ref}
      className={cn("px-4 py-3 align-middle text-black ", className)}
      {...props}
    >
      {children}
    </td>
  )
);
TableCell.displayName = "TableCell";

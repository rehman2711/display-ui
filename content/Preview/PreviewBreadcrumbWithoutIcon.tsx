import {
  BadgeDollarSign,
  ChevronRight,
  House,
  Receipt,
  ShoppingCart,
  Truck,
} from "lucide-react"

import { Breadcrumb } from "@/registry/default/displayui/Breadcrumb"

const PreviewBreadcrumbWithoutIcon = () => {
  return (
    <>
      <div>
        <Breadcrumb.Main separator={<ChevronRight width={14} />} textSize="xs">
          <Breadcrumb.Path>Home</Breadcrumb.Path>
          <Breadcrumb.Path>Cart</Breadcrumb.Path>
          <Breadcrumb.Path>Billing</Breadcrumb.Path>
          <Breadcrumb.Path>Shipping</Breadcrumb.Path>
          <Breadcrumb.Path>Payment</Breadcrumb.Path>
        </Breadcrumb.Main>
      </div>
    </>
  )
}

export default PreviewBreadcrumbWithoutIcon

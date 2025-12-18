import {
  BadgeDollarSign,
  ChevronRight,
  House,
  Receipt,
  ShoppingCart,
  Truck,
} from "lucide-react"

import { Breadcrumb } from "@/registry/default/displayui/Breadcrumb"

const PreviewBreadcrumbWithIcon = () => {
  return (
    <>
      <div>
        <Breadcrumb.Main separator={<ChevronRight width={14} />} textSize="xs">
          <Breadcrumb.Path icon={<House width={12} />}>Home</Breadcrumb.Path>
          <Breadcrumb.Path icon={<ShoppingCart width={12} />}>
            Cart
          </Breadcrumb.Path>
          <Breadcrumb.Path icon={<Receipt width={12} />}>
            Billing
          </Breadcrumb.Path>
          <Breadcrumb.Path icon={<Truck width={12} />}>
            Shipping
          </Breadcrumb.Path>
          <Breadcrumb.Path icon={<BadgeDollarSign width={12} />}>
            Payment
          </Breadcrumb.Path>
        </Breadcrumb.Main>
      </div>
    </>
  )
}

export default PreviewBreadcrumbWithIcon

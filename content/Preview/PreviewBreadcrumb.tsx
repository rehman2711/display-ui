import {
  BadgeDollarSign,
  ChevronRight,
  House,
  Receipt,
  ShoppingCart,
  Truck,
} from "lucide-react"

import { Breadcrumb } from "@/registry/default/displayui/Breadcrumb"

const PreviewBreadcrumb = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-8">
          {/* WITHOUT ICONS */}
          <div className="mb-8">
            <div>
              <Breadcrumb.Main
                separator={<ChevronRight width={14} />}
                textSize="xs"
              >
                <Breadcrumb.Path>Home</Breadcrumb.Path>
                <Breadcrumb.Path>Cart</Breadcrumb.Path>
                <Breadcrumb.Path>Billing</Breadcrumb.Path>
                <Breadcrumb.Path>Shipping</Breadcrumb.Path>
                <Breadcrumb.Path>Payment</Breadcrumb.Path>
              </Breadcrumb.Main>
            </div>

            <div>
              <Breadcrumb.Main
                separator={<ChevronRight width={16} />}
                textSize="sm"
              >
                <Breadcrumb.Path>Home</Breadcrumb.Path>
                <Breadcrumb.Path>Cart</Breadcrumb.Path>
                <Breadcrumb.Path>Billing</Breadcrumb.Path>
                <Breadcrumb.Path>Shipping</Breadcrumb.Path>
                <Breadcrumb.Path>Payment</Breadcrumb.Path>
              </Breadcrumb.Main>
            </div>

            <div>
              <Breadcrumb.Main
                separator={<ChevronRight width={18} />}
                textSize="md"
              >
                <Breadcrumb.Path>Home</Breadcrumb.Path>
                <Breadcrumb.Path>Cart</Breadcrumb.Path>
                <Breadcrumb.Path>Billing</Breadcrumb.Path>
                <Breadcrumb.Path>Shipping</Breadcrumb.Path>
                <Breadcrumb.Path>Payment</Breadcrumb.Path>
              </Breadcrumb.Main>
            </div>
          </div>

          {/* WITH ICONS */}

          <div>
            <div>
              <Breadcrumb.Main
                separator={<ChevronRight width={14} />}
                textSize="xs"
              >
                <Breadcrumb.Path icon={<House width={12} />}>
                  Home
                </Breadcrumb.Path>
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

            <div>
              <Breadcrumb.Main
                separator={<ChevronRight width={16} />}
                textSize="sm"
              >
                <Breadcrumb.Path icon={<House width={14} />}>
                  Home
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<ShoppingCart width={14} />}>
                  Cart
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<Receipt width={14} />}>
                  Billing
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<Truck width={14} />}>
                  Shipping
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<BadgeDollarSign width={14} />}>
                  Payment
                </Breadcrumb.Path>
              </Breadcrumb.Main>
            </div>

            <div>
              <Breadcrumb.Main
                separator={<ChevronRight width={18} />}
                textSize="md"
              >
                <Breadcrumb.Path icon={<House width={16} />}>
                  Home
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<ShoppingCart width={16} />}>
                  Cart
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<Receipt width={16} />}>
                  Billing
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<Truck width={16} />}>
                  Shipping
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<BadgeDollarSign width={16} />}>
                  Payment
                </Breadcrumb.Path>
              </Breadcrumb.Main>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PreviewBreadcrumb

import { Drawer } from "@/registry/default/displayui/Drawer"

const PreviewDrawerTop = () => {
  return (
    <>
      <div className=" flex justify-center items-center">
        <Drawer.Main side="top" className="">
          <Drawer.Trigger className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Top Drawer
          </Drawer.Trigger>
          <Drawer.Content className="p-6 bg-white shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Drawer Title</h2>
            <p className="text-sm mb-6">
              This is a simple drawer for testing. You can add any content you
              want here.
            </p>
            <Drawer.Close className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Close
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Main>
      </div>
    </>
  )
}

export default PreviewDrawerTop

import { Calendar } from "@/registry/default/displayui/Calendar"

const PreviewCalendarPrimary = () => {
  return (
    <>
      <div className="flex justify-center items-center mx-auto">
        <Calendar className="w-[20%]" border="primary" />
      </div>
    </>
  )
}

export default PreviewCalendarPrimary

import { Carousel, CarouselItem } from "@/registry/default/displayui/Carousel"

const PreviewCarouselWithAutoplayIntervals = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Carousel size="lg" autoPlay intervalMs={4000}>
          <CarouselItem className="bg-white h-64 flex items-center justify-center text-white text-2xl">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="bg-blue-400 h-64 flex items-center justify-center text-white text-2xl">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="bg-green-400 h-64 flex items-center justify-center text-white text-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </CarouselItem>
        </Carousel>
      </div>
    </>
  )
}

export default PreviewCarouselWithAutoplayIntervals

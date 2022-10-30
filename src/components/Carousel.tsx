import { Carousel } from "flowbite-react"
import { useWindowSize } from "usehooks-ts"
import Image1 from "../images/image-product-1.jpg"
import Image2 from "../images/image-product-2.jpg"
import Image3 from "../images/image-product-3.jpg"
import Image4 from "../images/image-product-4.jpg"

const images = [Image1, Image2, Image3, Image4]
const CarouselComponent = () => {
  const { width } = useWindowSize()
  return (
    <>
      {width < 1024 && (
        <Carousel className="h-[400px]">
          {images.map((image) => (
            <img src={image} />
          ))}
        </Carousel>
      )}
    </>
  )
}

export default CarouselComponent

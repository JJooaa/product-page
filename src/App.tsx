import MenuIcon from "./images/icon-menu.svg"
import cartIcon from "./images/icon-cart.svg"
import MinusIcon from "./images/icon-minus.svg"
import PlusIcon from "./images/icon-plus.svg"
import Logo from "./images/logo.svg"
import Avatar from "./images/image-avatar.png"
import Image1 from "./images/image-product-1.jpg"
import Image2 from "./images/image-product-2.jpg"
import Image3 from "./images/image-product-3.jpg"
import Image4 from "./images/image-product-4.jpg"
import { useState } from "react"
import MobileMenu from "./components/MobileMenu"
import ShoppingCart from "./components/ShoppingCart"
import { useWindowSize } from "usehooks-ts"
import CarouselComponent from "./components/Carousel"
import { CartIcon } from "./components/Icons"

interface CartItem {
  image: string
  name: string
  price: number
  quantity: number
}
const images = [Image1, Image2, Image3, Image4]

const App = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      image: Image1,
      name: "Fall Limited Edition Sneakers",
      price: 125,
      quantity: 0,
    },
  ])
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false)
  const [currentMainImage, setCurrentMainImage] = useState(images[0])
  const { width } = useWindowSize()

  let currentItemIndex: number = 0

  const handleIncrementation = () => {
    const updatedQuantity = {
      ...cartItems[currentItemIndex],
      quantity: (cartItems[currentItemIndex].quantity += 1),
    }
    setCartItems([updatedQuantity])
  }

  const handleDecrementation = () => {
    if (cartItems[currentItemIndex].quantity === 0) return
    const updatedQuantity = {
      ...cartItems[currentItemIndex],
      quantity: (cartItems[currentItemIndex].quantity -= 1),
    }
    setCartItems([updatedQuantity])
  }

  const navLinks = ["Collections", "Men  ", "Women", "About", "Contact"]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* If on mobile and hamburger is open */}
      {width < 768 && isMobileNavOpen && (
        <MobileMenu setIsMobileNavOpen={setIsMobileNavOpen} />
      )}
      {isShoppingCartOpen && (
        <ShoppingCart
          cartItems={cartItems}
          setIsShoppingCartOpen={setIsShoppingCartOpen}
        />
      )}
      <header
        className="px-6 py-4 flex justify-between items-center min-h-16 
        relative max-w-[1110px] mx-auto md:py-[44px] md:border-b-[1px]"
      >
        <div className="flex h-6 items-center">
          {/* If on mobile render Hamburger menu */}
          {width < 768 && (
            <img
              src={MenuIcon}
              className="mr-8"
              alt="hamburger menu"
              onClick={() => setIsMobileNavOpen(true)}
            />
          )}
          <img src={Logo} alt="sneakers bolded" />
        </div>
        {width > 768 && (
          <ul className="flex gap-8 text-darkgrayishblue grow max-w-lg mx-10">
            {navLinks.map((link) => (
              <li
                className="py-2 grow
                bg-gradient-to-r from-orange to-orange hover:text-black
                bg-[length:0px_3px] bg-left-bottom bg-no-repeat cursor-pointer
                transition-[background-size duration-500 hover:bg-[length:100%_3px]"
              >
                {link}
              </li>
            ))}
          </ul>
        )}
        <div className="flex gap-4 h-6 items-center justify-center">
          {/* Shopping Cart Icon */}

          <div
            onClick={() => setIsShoppingCartOpen((prev) => !prev)}
            className="p-4 cursor-pointer"
          >
            <CartIcon fill="grey" />
          </div>
          {/* Avatar  */}
          <img src={Avatar} alt="" className="h-6 md:h-12 md:ml-4" />
        </div>
      </header>
      <CarouselComponent />
      {/* Main content */}
      <main
        className="p-6 max-w-[1110px] mx-auto lg:mt-16 md:flex md:justify-between 
        md:px-12 md:flex-wrap md:gap-6"
      >
        {width > 1024 && (
          <div className="flex flex-col gap-8">
            <img
              className="w-[445px] rounded-lg"
              src={currentMainImage}
              alt=""
            />
            <div className="flex w-[445px] justify-between">
              {images.map((image, index) => (
                <img
                  src={image}
                  onClick={() => setCurrentMainImage(images[index])}
                  alt=""
                  className="w-[88px] h-[88px] rounded-lg cursor-pointer hover:opacity-70"
                />
              ))}
            </div>
          </div>
        )}
        <div className="md:self-center lg:max-w-[445px] mx-auto">
          <h2 className="text-orange font-bold">Sneaker Company</h2>
          <h2 className="text-[1.75rem] font-bold mt-5 sm:text-[2.8rem] leading-[48px]">
            Fall Limited Edition Sneakers
          </h2>
          <p className="text-sm text-darkgrayishblue mt-4 sm:text-base">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex items-center justify-between gap-4 mt-6">
            <h3 className="font-bold text-[1.75rem]">$125.00</h3>
            <h4 className="text-orange p-1 rounded-lg font-bold bg-paleOrange">
              50%
            </h4>
            <p className="line-through grow text-right font-bold text-grayishblue">
              $250.00
            </p>
          </div>
          <div className="flex gap-6 flex-wrap">
            <div
              className="flex w-fit md:w-auto justify-between h-[60px] items-center 
              px-8 py-4 mt-6 rounded-lg bg-lightgrayishblue"
            >
              <img
                src={MinusIcon}
                className="cursor-pointer p-4"
                alt="minus"
                onClick={handleDecrementation}
              />
              <p className="font-bold px-4">{cartItems[0]?.quantity}</p>
              <img
                src={PlusIcon}
                alt="plus"
                className="cursor-pointer p-4"
                onClick={handleIncrementation}
              />
            </div>
            <button
              className="flex grow min-w-[200px] max-w-[300px] justify-center gap-4 hover:bg-opacity-70
              items-center cursor-pointer text-center bg-orange font-bold py-4 mt-4 
            text-white rounded-lg shadow-[0px 20px 50px -20px] shadow-[#FF7E1B] md:grow"
            >
              <span>
                <CartIcon fill="white" />
              </span>
              Add To Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

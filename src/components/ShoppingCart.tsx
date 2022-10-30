import DeleteIcon from "../images/icon-delete.svg"
import { useOnClickOutside } from "usehooks-ts"
import { useRef } from "react"

interface CartItem {
  image: string
  name: string
  price: number
  quantity: number
}
interface ShoppingCartProps {
  cartItems: CartItem[]
  setIsShoppingCartOpen: (value: boolean) => void
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  cartItems,
  setIsShoppingCartOpen,
}) => {
  const isCartEmpty = cartItems[0].quantity > 0 ? false : true

  const ref = useRef<HTMLDivElement | null>(null)

  useOnClickOutside(ref, () => setIsShoppingCartOpen(false))
  return (
    <div
      className="rounded-lg absolute z-50 bg-white w-[360px] 
      -translate-x-1/2 left-1/2 min-h-[256px] top-20 p-6 shadow-2xl"
      ref={ref}
    >
      <h3 className="font-bold border-b-[1px] pb-4">Cart</h3>
      <ul className="pt-4">
        {cartItems[0].quantity > 0 &&
          cartItems.map((item) => {
            let totalPrice = (item.price * item.quantity).toFixed(2)
            return (
              <li className="flex justify-between gap-4 text-darkgrayishblue">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-lg"
                />
                <div className="grow">
                  <p>{item.name}</p>
                  <p>
                    ${item.price.toFixed(2)} x {item.quantity}
                    <span className="font-bold text-black pl-2">
                      {" "}
                      ${totalPrice}
                    </span>
                  </p>
                </div>
              </li>
            )
          })}
      </ul>
      {isCartEmpty ? (
        <p className="pt-4">Cart Is Empty</p>
      ) : (
        <button
          className="w-full mt-4 text-center bg-orange font-bold py-4 
          text-white rounded-lg shadow-[0px 20px 50px -20px] shadow-[#FF7E1B]"
        >
          Checkout
        </button>
      )}
    </div>
  )
}

export default ShoppingCart

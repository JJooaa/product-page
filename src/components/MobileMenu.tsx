import CloseIcon from "../images/icon-close.svg"

interface MenuProps {
  setIsMobileNavOpen: (value: boolean) => void
}

const MobileMenu: React.FC<MenuProps> = ({ setIsMobileNavOpen }) => {
  const navLinks = ["Collections", "Men", "Women", "About", "Contact"]

  return (
    <div className="absolute w-full h-full bg-black z-20 text-black bg-opacity-70">
      <div className="bg-white w-2/3 h-full p-6 ">
        <img
          src={CloseIcon}
          alt="cross"
          onClick={() => setIsMobileNavOpen(false)}
        />
        <ul className="pt-4 transition ease-linear">
          {navLinks.map((link) => (
            <li
              className="font-bold py-2 text-darkBlack
              bg-gradient-to-r from-pink-500 to-purple-500
              bg-[length:0px_3px] bg-left-bottom bg-no-repeat
              transition-[background-size duration-500 hover:bg-[length:100%_3px]"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu

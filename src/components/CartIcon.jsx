import { useContext } from "react";

import { BsCart } from "react-icons/bs";

import { CartContext } from "../contexts/cartContext";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div
      className="w-[45px] h-[45px] relative flex items-center justify-center cursor-pointer"
      onClick={toggleIsCartOpen}
    >
      {/* <ShoppingIcon className="w-[24px] h-[24px]" /> */}
      <BsCart className="h-6 w-6" />
      <span className="absolute text-[10px] font-bold bottom-[12px]">
        {cartCount}
      </span>
    </div>
  );
};

export default CartIcon;

import React, { useState } from "react";
import bagIcon from "bootstrap-icons/icons/bag.svg";
import styles from "./styles.module.css";
import Basket from "./Basket";
import { useSelector } from "react-redux";

const Cart = () => {
  const [opened, setOpened] = useState(false);
const cart = useSelector((state) => state.cartItems)
  return (
    <>
      <div className={styles.cartButton} onClick={() => setOpened(!opened)}>
        <img src={bagIcon} alt="" />
        <span>{cart.length > 0 ? cart.length : null}</span>
      </div>
      {/* где-то тут был компонент, который выводил окно корзины, если opened === true  */}
      { opened && <Basket cart={cart} setOpened={setOpened}  />}
    </>
  );
};

export default Cart;

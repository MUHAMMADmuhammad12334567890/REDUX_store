import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { printPrice } from "../../../helpers/printPrice";
import style from "./product.module.css";

function Product({ product }) {
  const disPatch = useDispatch();

  // через фацнд
  const basket = useSelector(state => state.cartItems)
  // вывод карточки продукта
const isAvailable = product.left === 0

const onCart = basket.find(item => item.productId === product.id)
 
  const hendleAdd = (id) => {
    disPatch({ type: "add", payload: id });
  };


  return (
    <div className={style.product}>
      <img className={style.image} src={product.image} alt="product" />
      <div className={style.price}>
      <p>{printPrice(product)}</p>
      <p className={style.oldPrice}>{product.discount > 0 && product.price}</p>
      </div>
      <p>{product.name}</p>
      <p>{product.left}</p>
      <button
        className={style.button}
        onClick={() => hendleAdd(product.id)}
disabled={isAvailable || onCart }
      >{(onCart && 'Ужен в карзине') || (isAvailable && 'Нет в наличии') || ('Добавит в корзину')}
       
      </button>
    </div>
  );
}

export default Product;

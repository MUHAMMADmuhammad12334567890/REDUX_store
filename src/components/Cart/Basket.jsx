import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import style from "./styles.module.css";

const Basket = ({setOpened}) => {
const carts = useSelector((state) => state.cartItems)
const products = useSelector((state) => state.products)
const disPatch = useDispatch()



const hendleAdd = (id, left) => {
    if(left > 0 ) {

 disPatch({type:'cartAdd', payload: id})
    }
}

const hendleDelete = (id, amount) => {
    if(amount > 1) {
disPatch({type: 'cartMinus', payload: id})
    }
}

const hendleRemove = (id) => {
disPatch({type: 'delete', payload: id})

}

  return (
    <div className={style.basket}>
      <div className={style.close} onClick={() => setOpened(false)}>Закрыть</div>
      <div className={style.cartIsEmpty}>
      { carts.length <= 0 ? 'В корзине нет товаров' : <table>
        <thead>
          <tr className={style.basket_table}>
            <th>#</th>
            <th>Товар</th>
            <th>Остаток</th>
            <th>Кол-во</th>
          </tr>
        </thead>
        <tbody>
        { carts.map((cart, id) => {
           
            return products.map((product) => {
                if (cart.productId === product.id) {
                   return  (<tr>
                        <td>{cart.id}</td>
                        <td><img className={style.cart_product_image} src={product.image} alt='product' /></td>
                        <td>{product.name}</td>
                        <td>{product.left}</td>
                        <td><button className={style.plus_minus} onClick={() => hendleAdd(product.id, product.left)}>+</button></td>
                        <td>{cart.amount}</td>
                        <td><button className={style.plus_minus} onClick={() => hendleDelete(product.id, cart.amount)}>-</button></td>
                        <td><button className={style.x} onClick={(id) => hendleRemove(cart.productId)} >X</button></td>
                    </tr>)
                }
            })
        })}
            
        </tbody>
    
      </table>}
      </div>
    </div>
            
  );
};



export default Basket;

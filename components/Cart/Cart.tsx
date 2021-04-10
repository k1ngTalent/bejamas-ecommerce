import React from 'react';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.scss';
import { Cart as ICart } from '../../interfaces';

type Props = {
    cartItems:ICart[],
    closeCart:()=>void,
    clearCart:()=>void
}
const Cart=({cartItems,closeCart,clearCart}:Props)=>(
    <div className={styles.cart}>
        <div className="flex justify-end pb-3 cursor-pointer" onClick={()=>closeCart()}>
            <img src="./icons/close.svg" width={18} height={18}/>
        </div>
        {cartItems?.map((cartItem:ICart,index:number)=>(
            <CartItem cartItem={cartItem} key={index} />
        ))}
        {cartItems?.length == 0 && <div>No Item in Cart</div>}
        <button onClick={cartItems && clearCart} className={`${styles.cart__clearBtn} ${cartItems?.length == 0 &&styles['cart__clearBtn--disabled']}`}>Clear</button>
    </div>
)

export default Cart;
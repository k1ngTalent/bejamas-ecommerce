import React from 'react';
import styles from './Header.module.scss';
import Cart from '../Cart/Cart';
import { Cart as ICart } from '../../interfaces';

type Props={
    isCartVisible:boolean,
    toggleCartVisibility:()=>void,
    closeCart:()=>void,
    cartLength:number,
    cartItems:ICart[],
    clearCart:()=>void
}
const Header = ({ isCartVisible, toggleCartVisibility, closeCart, cartLength, cartItems,clearCart }: Props) => {

    return (
        <div className={`${styles.header} flex justify-between py-3 cursor-pointer`}>
            <img src='/icons/logo.svg' alt="Bejamas Logo" />
            <div className={styles.header__cart} onClick={() =>{ toggleCartVisibility()}}>
                <img src='/icons/shopping-cart.svg' alt="shopping cart" />
                {cartLength > 0 && <div className={styles['header__cart--length']}>
                    {cartLength}
                </div>}
            </div>
            {isCartVisible && <Cart cartItems={cartItems} closeCart={closeCart} clearCart={clearCart} />}
        </div>
    )
}

export default Header;
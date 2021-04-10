import React from 'react';
import styles from './CartItem.module.scss';
import { Cart } from '../../interfaces';
import { formatCurrency } from '../../utils/utils';

type Props = {
    cartItem: Cart
}
const CartItem = ({ cartItem }: Props) => (
    <div className={styles.cartItem}>
        <div className="product-bag-info">
            <div className={styles.cartItem__name}>
                {cartItem.name} {`X ${cartItem.quantity}`}
            </div>
            <div className={styles.cartItem__price}>
                {formatCurrency(cartItem.price, cartItem.currency)}
            </div>
        </div>
        <div className={styles.cartItem__image}>
            <img src={cartItem.image?.src} alt={cartItem.image?.alt} />
        </div>
    </div>
)

export default CartItem;
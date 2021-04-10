import React from 'react';
import styles from './ProductItem.module.scss';
import { Product, Cart } from '../../interfaces';
import { formatCurrency } from '../../utils/utils';

type Props={
    product:Product,
    updateCartItems:(P:Cart)=>void
}
const ProductItem = ({ product, updateCartItems }: Props) => (
    <div className={styles.product}>
        <div className={styles.product__top}>
            <img src={product?.image?.src} alt={product?.image?.alt} className={styles.product__image} />
            {(product.bestseller) ? (
                <div className={styles.product__best}>Best Seller</div>
            ) : ('')}
            <button onClick={()=>{updateCartItems({...product,productId:product.id,quantity:1})}} className={styles['product__cart-btn']}>Add to Cart</button>
        </div>
        <div className={styles.product__category}>{product.category}</div>
        <div className={styles.product__name}>{product.name}</div>
        <div className={styles.product__price}>
            {formatCurrency(product.price,product.currency)}
        </div>

    </div>
)

export default ProductItem;
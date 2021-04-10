import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { Cart } from '../../interfaces';

type Props = {
    products: any[],
    updateCartItems:(P:Cart)=>void
}
const ProductList = ({ products,updateCartItems }: Props) => (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map((product, index) => (
                <ProductItem product={product} key={index} updateCartItems={updateCartItems} />
         
    ))}
    {!products || products.length == 0 && <div className="text-4xl flex justify-between w-full">No Product to show</div>}
    </div>

)

export default ProductList;
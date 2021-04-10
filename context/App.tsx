import React, { useState, useEffect, createContext } from "react"
import { Cart } from "../interfaces";

const AppContext = createContext({});

const LOCALSTORAGE_CART = 'cartItems';

function AppProvider({ children }: any) {
    const [cartItems, setCartItems] = useState<Cart[]>([]);
    const [isCartVisible, setIsCartVisible] = useState<boolean>(false);


    useEffect(() => {
        let data = localStorage.getItem(LOCALSTORAGE_CART);
        if(!data){
            return;
        }
            const cartItemsData = JSON.parse(data);
            if (cartItemsData) {
                setCartItems(cartItemsData);
            }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCALSTORAGE_CART, JSON.stringify(cartItems))
    }, [cartItems])

    const updateCartItems = (item: any) => {
        const existingCartItem = cartItems?.find((cartItem: any) => cartItem.productId == item.id);
        if (existingCartItem) {
            let updatedCartItems = cartItems.map((cartItem: any) =>
                cartItem.productId === item.id ? {
                    ...cartItem, quantity: cartItem.quantity + 1
                } : cartItem
            );
            setCartItems(updatedCartItems);
            setIsCartVisible(true);
            window.scrollTo(0, 0)
            return;
        }
        let topId = cartItems?.length > 0 ? cartItems[cartItems.length - 1].id + 1 : 1;
        setCartItems(cartItems.concat({...item, id: topId,quantity:1 }));
        setIsCartVisible(true);
        window.scrollTo(0, 0)
    }

    const toggleCartVisibility = () => {
        setIsCartVisible((isCartVisible: boolean) => !isCartVisible);
    }

    const closeCart = () => {
        setIsCartVisible(false);
    }


    const clearCart = () => {
         setCartItems([]);
    }

    return <AppContext.Provider
        value={{ cartItems, isCartVisible, updateCartItems, toggleCartVisibility, closeCart, clearCart }}
    >
        {children}
    </AppContext.Provider>
}

export  {AppContext,AppProvider};
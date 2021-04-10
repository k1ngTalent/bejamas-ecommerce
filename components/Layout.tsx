import React, { ReactNode, useContext } from 'react'
import Head from 'next/head'
import Header from './Header/Header'
import { AppContext } from '../context/App'
import styles from './Layout.module.scss';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const { isCartVisible, closeCart, clearCart, toggleCartVisibility, cartItems }: any = useContext(AppContext);

  return (
    <div className={styles.app}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header cartLength={cartItems?.length > 0 ? cartItems.length : 0} isCartVisible={isCartVisible} closeCart={closeCart} toggleCartVisibility={toggleCartVisibility} cartItems={cartItems} clearCart={clearCart} />
      {children}
    </div>
  )

}

export default Layout

import Layout from '../components/Layout'
import Products from '../components/Products/Products'
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct'
import { products } from '../utils/products'
import { useContext } from 'react'
import { AppContext } from '../context/App'

const IndexPage = () => {
  const { updateCartItems }: any = useContext(AppContext);
  const getFeaturedProduct=()=>{
      let result = products.find(product=>product.featured);
      if(!result){
        return products[0]
      }

      return result;
  }
  return(
  <Layout title="Home">
    <FeaturedProduct product={getFeaturedProduct()} updateCartItems={updateCartItems}/>
   <Products />
  </Layout>
)}

export default IndexPage

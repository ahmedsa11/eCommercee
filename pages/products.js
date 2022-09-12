import React from 'react'
import Product from '../components/Product'

const Products = ({products}) => {
  return (<>
    <div>Products</div>
    {products.data.map(product =><Product key={product.id} product={product}/>)}
    </>

  )
}

export default Products
export const getStaticProps = async () => {
    const res=await fetch("https://e-commerce-app-api-v1.herokuapp.com/api/v1/categories")
    const data=await res.json()
    return {
        props: {
            products: data
        }
}
}
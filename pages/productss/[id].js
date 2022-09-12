import React from 'react'
const SingleP = ({product}) => {
  return (
    <div>{product.title}</div>
  )
}
export default SingleP
export const getStaticProps = async (context) => {
    const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
    const data = await res.json()
    return {
        props: {
            product: data
        }
    }
}
export const getStaticPaths  = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    const paths = data.map(product => ({
        params: { id:`${product.id}` }
          
    }))
    return {
        paths,
        fallback: false 
    }
}


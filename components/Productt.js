import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Product = ({product}) => {
    const {id,title,price,image,name}=product
  return (
 <>
 <h1>{title}</h1>
    <p>{name}</p>
    <p>{price}</p>
    <Image src={image} alt="5f" width="200"height="200"/>
    <Link href={`/productss/${id}`}><a>more details</a></Link>
 </>
  )
}
export default Product
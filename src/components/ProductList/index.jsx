import { useEffect, useState } from "react"
import { ProductItem } from "../Product"
import './index.css'
import { fetchDataProducts } from "../../api/products"

export const ProductList = () => {
  const [{ total, products }, setItems] = useState({ total: 0, products: [] })

  useEffect(() => {
    fetchDataProducts(setItems)
  }, [])
  if (total > 0)
    return (
      <div className="cardProductList">
        {products.map((productItem) => {
          return (<ProductItem key={productItem._id} productItem={productItem} />)
        })}
      </div>
    )
}

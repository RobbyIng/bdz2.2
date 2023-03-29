import { useCallback, useEffect, useState } from "react"
import { ProductItem } from "../Product"
import './index.css'

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOGFhMzk3MTIxODM4ZjI4YTAiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQzLCJleHAiOjE3MTAzMzg0NDN9.VZJscJHSDjMHpbDPacA4ST4PnQp6G1JYlZhZoBSHfog'
const password = '12345678'
const userId = '64107e08aa397121838f28a0'

export const UserApi = () => {
  const [items, setItems] = useState({ total: 0, products: [] })

  const fetchDataProducts = useCallback(async () => {
    const res = await fetch('https://api.react-learning.ru/products', {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
    let responce = {}
    if (res.ok) {
      responce = await res.json();
      setItems(responce)
    }
    else {
      let answer = ''
      if (res.status > 499) answer = 'Ошибка сервера'
      else if (res.status > 399) {
        if (res.status === 401) answer = 'Ошибка авторизации'
        else answer = 'Ошибка запроса пользователя'
      }
      responce = { message: answer }
    }
  })
  useEffect(() => {
    fetchDataProducts()
  }, [])
  const productItems = items.products;
  if (items.total > 0)
    return (

      <div className="cardProductList">
        {productItems.map((productItem, index) => {
          return (<ProductItem key={index} productItem={productItem} />)
        })}
      </div>
    )
}


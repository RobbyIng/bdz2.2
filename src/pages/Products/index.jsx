import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { productsFetch } from "../../api/products"
import { TOKEN } from "../../utils/constants"

export const Products = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({ total: 0, products: [] })

  useEffect(() => {
    const token = localStorage.getItem(TOKEN)
    if (!token) navigate('/signin')
  }, [navigate])

  useEffect(() => {
    const fetchData = async () => {
      const res = await productsFetch()
      const responce = await res.json()
      //TODO: проверки!
    }

    fetchData()
  }, [])

  return (
    <div>Products</div>
  )
}

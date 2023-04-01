import { Link } from "react-router-dom"
import './index.css'

export const Home = () => {


  return (
    <div>
     <h1><Link to={'/signin'} className="redColor">Авторизуйтесь</Link> чтобы отобразить список продуктов</h1>
     <h1>Если вы не зарегистрированы, пожалуйста пройдите <Link to={'/signup'} className="redColor">регистрацию</Link></h1>

    </div>
  )
}

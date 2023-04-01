import './index.css'

export const Footer = () => {
    return (
        <div className='Footer'>
            <div className='firstFooter'>
                <h1>
                    <i className="fa fa-light fa-paw fa-2xl"></i>
                    DogFood
                </h1>
                <p>
                    <i className="fa fa-light fa-shield-dog fa-xl"></i>
                    <span>"Интернет-магазин DogFood.ru"</span>
                </p>
            </div>
        <nav className='secondFooter'>
            <ul>
                <li><a href="">Каталог</a></li>
                <li><a href="">Акции</a></li>
                <li><a href="">Новости</a></li>
                <li><a href="">Отзывы</a></li>
            </ul>
        </nav>
        <nav className='thirdFooter'>
            <ul>
                <li><a href="">Оплата и доставка</a></li>
                <li><a href="">Часто спрашивают</a></li>
                <li><a href="">Обратная связь</a></li>
                <li><a href="">Контакты</a></li>
            </ul>
        </nav>
            <ul className='fourthFooter'>
                <li className='BoldText'>Мы на связи</li>
                <li className='BoldText'>8 (999) 00-00-00</li>
                <li><a href="">dogfood.ru@gmail.com</a></li>
                <li className='social'>
                    <div><i className="fa fa-brands fa-telegram fa-xl"></i></div>
                    <div><i className="fa fa-brands fa-instagram fa-xl"></i></div>
                    <div><i className="fa fa-brands fa-vk fa-xl"></i></div>
                    <div><i className="fa fa-brands fa-whatsapp fa-xl"></i></div>
                    <div><i className="fa fa-brands fa-viber fa-xl"></i></div>
                </li>
            </ul>
        </div>

    )
}
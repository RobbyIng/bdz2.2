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
            <div className='secondFooter'>
                <a href="">Каталог</a>
                <br />
                <a href="">Акции</a>
                <br />
                <a href="">Новости</a>
                <br />
                <a href="">Отзывы</a>
            </div>
            <div className='thirdFooter'>
                <a href="">Оплата и доставка</a>
                <br />
                <a href="">Часто спрашивают</a>
                <br />
                <a href="">Обратная связь</a>
                <br />
                <a href="">Контакты</a>
            </div>
            <div className='fourthFooter'>
                <h4>Мы на связи</h4>
                <h4>8 (999) 00-00-00</h4>
                <a href="">dogfood.ru@gmail.com</a>
                <br />
                <i className="fa fa-brands fa-telegram"></i>
                <i className="fa fa-brands fa-instagram"></i>
                <i className="fa fa-brands fa-vk"></i>
                <i className="fa fa-brands fa-whatsapp"></i>
                <i className="fa fa-brands fa-viber"></i>

            </div>
        </div>

    )
}
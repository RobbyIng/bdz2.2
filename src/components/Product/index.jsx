import './index.css'

export const ProductItem = ({ productItem }) => {
    return (
        <div className="cardProduct">
            <img
                src={productItem.pictures}
                className="card-img-top"
                alt="Изображение корма для собак"
            />
            <div className="card-body">
                <p className="card-title">Цена: {productItem.price}</p>
                <p className="card-amount">{productItem.stock} шт</p>
                <p className="card-text">{productItem.name}</p>
            </div>
            <div className="btnBin">
                <button type="button" data-action="edit" className="addToBin">В корзину</button>
            </div>
        </div>
    )
}
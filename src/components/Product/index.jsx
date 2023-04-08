import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'

export const ProductItem = ({ productItem }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.cardProduct}>
            <img
                src={productItem.pictures}
                className={styles.imgCardProduct}
                alt="Изображение корма для собак"  
                onClick={()=>navigate(`/products/${productItem._id}`)}             
            />
            <div className={styles.cardBody}>
                <p className={styles.cardTitle}>Цена: {productItem.price}</p>
                <p className={styles.cardAmount}>{productItem.stock} шт</p>
                <p >{productItem.name}</p>
            </div>
            <div className="btnBin">
                <button type="button" data-action="edit" className={styles.addToBin}>В корзину</button>
            </div>
        </div>
    )
}
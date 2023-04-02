import { NavLink } from 'react-router-dom'
import styles from './index.module.css'
import React from 'react'
import { TOKEN } from '../../utils/constants'

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.shopName}>
                <h1>
                    <i className="fa fa-light fa-paw fa-2xl"></i>
                    <span className={styles.DogFood}>DogFood</span>
                </h1>
            </div>
            {/* <div className="search"> */}
            <input type="text" id="product" className={styles.search}
                placeholder="Введите наименование продукта" />
            {/* </div> */}
            <nav className={styles.navigationWrapper}>
                <ul className={styles.navigation}>
                    <li>
                        <NavLink className={styles.liked} to='/liked'><i className="fa fa-regular fa-heart fa-lg"></i></NavLink> 
                    </li>
                    <li>
                        <NavLink className={styles.basket} to='/basket'><i className="fa fa-regular fa-briefcase fa-lg"></i></NavLink> 
                    </li>
                    <li>
                        <NavLink className={styles.userCabinet} to='/userCabinet'><i className="fa fa-light fa-paw fa-lg"></i></NavLink> 
                    </li>
                    <li>
                        {/* <NavLink id='exit' className={styles.exit} to='/' onClick={
                            document.getElementById("exit").style.visibility = "hidden"
                        }>Выход</NavLink>  */}
                        <NavLink id='exit' className={styles.exit} to='/' onClick={()=>{
                            localStorage.removeItem(TOKEN)
                            // styles.exit.visibility = 'hidden'
                        }}>Выход</NavLink> 
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export const MemoHeader = React.memo(Header)
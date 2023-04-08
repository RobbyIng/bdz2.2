import { NavLink } from 'react-router-dom'
import styles from './index.module.css'
import React from 'react'

const Header = () => {
  
    return (
        <div className={styles.wrapper}>
            <div className={styles.shopName}>
                <h1>
                    <NavLink className={({isActive})=> isActive ? styles.active : ""} to='/products'>
                        <i className="fa fa-light fa-paw fa-2xl"></i>
                        <span className={styles.DogFood}>DogFood</span>
                    </NavLink>
                </h1>
            </div>
            {/* <div className="search"> */}
            <input type="text" id="product" className={styles.search}
                placeholder="Введите наименование продукта" />
            {/* </div> */}
            <nav className={styles.navigationWrapper}>
                <ul className={styles.navigation}>
                    <li>
                        <NavLink className={({isActive})=> isActive ? styles.active : ""} to='/liked'>
                                <i className="fa fa-regular fa-heart fa-lg"></i>
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink className={({isActive})=> isActive ? styles.active : ""} to='/basket'>
                            <i className="fa fa-regular fa-briefcase fa-lg"></i>
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink className={({isActive})=> isActive ? styles.active : ""} to='/userData'>
                            <i className="fa fa-light fa-paw fa-lg"></i>
                        </NavLink> 
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export const MemoHeader = React.memo(Header)
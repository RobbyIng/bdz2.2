import './index.css'
export const Header = () => {
    return (
        <div className="wrapper">
            <div className="shopName">
                <h1>
                    <i className="fa fa-light fa-paw fa-2xl"></i>
                    <span className='DogFood'>DogFood</span>
                </h1>
            </div>
            {/* <div className="search"> */}
            <input type="text" id="product" className="search"
                placeholder="Введите наименование продукта" />
            {/* </div> */}
            <div className="navigation">
                <div>
                    <i className="fa fa-regular fa-heart fa-lg"></i>
                </div>
                <div>
                    <i className="fa fa-regular fa-briefcase fa-lg"></i>
                </div>
                <div>
                    <i className="fa fa-light fa-paw fa-lg"></i>
                </div>
            </div>
        </div>
    )
}
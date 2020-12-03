import Product from '../../components/productCard/product';
import './Shop.scss';

const ShopPage = () => (
    <div className='my-container shop-container'>
        <ul className="no-ul">

            <li>
                <a href="/">item.Name</a>
            </li>
            <li>
                <a href="/">item.Name</a>
            </li>
        
        </ul>
        <div>        
            <h1>New in</h1>
            <div className="product-grid">
                <Product />
                <Product />
            </div>
        </div>
    </div>
) 

export default ShopPage;
import image from '../../Images/Products/1.jpg';

const Product = () => (
    <>
        <a href="/">
            <div className="product-image-container" >
                <img className="product-image" src={image} />
            </div>
            <div>
                <p>ProductTitle</p>
                <p>ProductPrice kr</p>
            </div>
        </a>
        <a href="/">
            <div className="product-image-container" >
                <img className="product-image" src={image} />
            </div>
            <div>
                <p>ProductTitle</p>
                <p>ProductPrice kr</p>
            </div>
        </a>
    </>
)

export default Product;